using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;

namespace AuthMiddleware
{
    public class UserIdentity
    {
        public string ID { get; set; }
        public string Email { get; set; }
        public string AddressIP { get; set; }
        public string Role { get; set; }
        public string Pseudo { get; set; }
        public string UrlPicture { get; set; }

        public UserIdentity()
        {

        }

        public UserIdentity(ClaimsPrincipal claims)
        {
            if (claims != null)
            {
                this.ID = claims.FindFirstValue(ClaimTypes.NameIdentifier);
                this.Email = claims.FindFirstValue(ClaimTypes.Email);
                this.AddressIP = claims.FindFirstValue("AddressIP");
                this.Role = claims.FindFirstValue(ClaimTypes.Role);
                this.UrlPicture = claims.FindFirstValue("UrlPicture");
                this.Pseudo = claims.FindFirstValue(ClaimTypes.Surname);
            }
        }

        public Claim[] GetClaims()
        {
            return new[]
            {
                new Claim(ClaimTypes.NameIdentifier,this.ID),
                new Claim(ClaimTypes.Email,this.Email),
                new Claim("AddressIP",this.AddressIP),
                new Claim(ClaimTypes.Role, this.Role),
                new Claim(ClaimTypes.Surname, this.Pseudo),
                new Claim("UrlPicture", this.UrlPicture)
            };
        }

    }
}
