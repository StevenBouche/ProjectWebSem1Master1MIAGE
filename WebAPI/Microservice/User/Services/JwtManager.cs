﻿using AuthMiddleware;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;
using System;
using System.Collections.Concurrent;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using User.Model.Security;
using User.Model.Users;

namespace User.Services
{
    public interface IJwtCacheManager
    {
        JwtToken GetJwtToken(Account account, string ip);
        RefreshToken GetRefreshToken(Account account, string clientIp, Action<Account> onNewRefreshToken);
        void RemoveRefreshToken(Account userAccount, string userIp, Action<Account> onDeleteToken);
        RefreshToken RefreshTokenIsValid(Account userAccount, RefreshToken token);
    }

    public class JwtManager : IJwtCacheManager
    {
        private readonly JwtTokenConfig Config;
        private readonly ConcurrentDictionary<string, string> UserRefreshTokens = new ConcurrentDictionary<string, string>();

        //private string Secret = "XCAP05H6LoKvbRRa/QkqLNMI7cOHguaRyHzyg7n5qEkGjQmtBhz4SzYh4Fqwjyi3KJHlSXKPwVu2+bXr6CtpgQ==";
        //private readonly double TimeExpirationJwt = 5 * 60;
        //private readonly double TimeExpirationRefresh = 10 * 60;

        public JwtManager(JwtTokenConfig config)
        {
            this.Config = config;
        }

        public JwtToken GetJwtToken(Account account, string ip)
        {
            return new JwtToken { 
                    AccessToken = this.GenerateToken(account, ip),
                    ExpireAt = this.UnixTimeNow() + (this.Config.AccessTokenExpiration * 60)
            };
        }

        public RefreshToken GetRefreshToken(Account account, string clientIp, Action<Account> onNewRefreshToken)
        {

            RefreshToken rToken = account.RefreshTokens
                                            .OrderByDescending(refresh => refresh.ExpireAt)
                                            .FirstOrDefault(refresh => refresh.AddressIP.Equals(clientIp));

            //if dont have valid token, generate new refresh token
            if (rToken is null)
            {
                rToken = new RefreshToken
                {
                    Token = this.GenerateRefreshToken(),
                    ExpireAt = this.UnixTimeNow() + (this.Config.RefreshTokenExpiration * 60),
                    AddressIP = clientIp
                };

                account.RefreshTokens.Add(rToken);
                onNewRefreshToken(account);

            }
            else if(rToken.ExpireAt<this.UnixTimeNow())
            {
                rToken.ExpireAt = this.UnixTimeNow() + (this.Config.RefreshTokenExpiration * 60);
                rToken.Token = this.GenerateRefreshToken();
                onNewRefreshToken(account);
            }

            return rToken;

        }

        public void RemoveRefreshToken(Account userAccount, string userIp, Action<Account> onDeleteToken)
        {
            userAccount.RefreshTokens.RemoveAll(refresh => refresh.AddressIP.Equals(userIp));
            onDeleteToken(userAccount);
        }

        public RefreshToken RefreshTokenIsValid(Account userAccount, RefreshToken token)
        {
            
            return userAccount.RefreshTokens.FirstOrDefault(refresh => 
                refresh.AddressIP.Equals(token.AddressIP) && 
                refresh.Token.Equals(token.Token) && 
                refresh.ExpireAt>this.UnixTimeNow());
        }

        private string GenerateToken(Account account,string ip)
        {

            UserIdentity identity = account.ToUserIdentity(ip);

            var claims = identity.GetClaims(); 

            byte[] key = Convert.FromBase64String(this.Config.Secret);
            SymmetricSecurityKey securityKey = new SymmetricSecurityKey(key);
            SecurityTokenDescriptor descriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddSeconds(this.Config.RefreshTokenExpiration * 60),
                SigningCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature)
            };

            JwtSecurityTokenHandler handler = new JwtSecurityTokenHandler();
            JwtSecurityToken token = handler.CreateJwtSecurityToken(descriptor);
            return handler.WriteToken(token);
        }

        private string GenerateRefreshToken()
        {
            var randomNumber = new byte[32];
            using var rng = RandomNumberGenerator.Create();
            rng.GetBytes(randomNumber);
            return Convert.ToBase64String(randomNumber);
        }

        public double UnixTimeNow()
        {
            return (DateTime.UtcNow - new DateTime(1970, 1, 1, 0, 0, 0)).TotalSeconds;
        }

    }

}
