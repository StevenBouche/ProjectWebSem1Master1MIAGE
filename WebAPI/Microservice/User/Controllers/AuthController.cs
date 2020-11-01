using System.Net;
using System.Security.Claims;
using AuthMiddleware;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using User.Model.Auth;
using User.Model.Security;
using User.Model.Users;
using User.Model.ViewModel.Auth;
using User.Services;

namespace User.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    [Authorize]
    public class AuthController : ControllerBase
    {

        private readonly IAccountsManager AccountManager;
        private readonly IJwtCacheManager JwtManager;

        private UserIdentity Identity {
            get
            {
                return this.User is null ? null : new UserIdentity(this.User);
            }
        }

        public AuthController(IAccountsManager manager, IJwtCacheManager jwtManager)
        {
            this.AccountManager = manager;
            this.JwtManager = jwtManager;
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public ActionResult<LoginResult> Login([FromBody] LoginView account)
        {
            //get account by email
            Account userAccount = this.AccountManager.GetAccountWithUserMail(account.Email);
            var result = new LoginResult();

            //if user dont exist
            if (userAccount == null) return NotFound(result);

            //test if correct password
            bool credentials = userAccount.Password.Equals(account.Password);
            if (!credentials) return Unauthorized(result);

            //get last tokens of user account
            result = new LoginResult
            {
                Message = "success",
                JwtToken = this.JwtManager.GetJwtToken(userAccount, account.AddressIP),
                RefreshToken = this.JwtManager.GetRefreshToken(userAccount, account.AddressIP, (a) => this.AccountManager.SaveRefreshToken(a))
            };

            return Ok(result);

        }

        [HttpPost("refresh")]
        [AllowAnonymous]
        public IActionResult RefreshToken([FromBody] RefreshToken token)
        {
            /*Account userAccount = this.Identity is null ?
                this.AccountManager.GetAccountWithRefreshToken(token) :
                this.AccountManager.GetAccountById(this.Identity.ID);*/

            Account userAccount = this.AccountManager.GetAccountWithRefreshToken(token);

            RefreshToken rToken = this.JwtManager.RefreshTokenIsValid(userAccount, this.Identity.AddressIP, token);

            var result = new LoginResult();

            if(rToken is null)
                result.Message = "No current refresh token valid";
            else
            {
                result.JwtToken = this.JwtManager.GetJwtToken(userAccount, this.Identity.AddressIP);
                result.RefreshToken = rToken;
            }
            return Ok(result);
        }

        [HttpPost("logout")]
        [Authorize]
        public IActionResult Logout()
        {
            Account userAccount = this.AccountManager.GetAccountById(this.Identity.ID);
            this.JwtManager.RemoveRefreshToken(userAccount, this.Identity.AddressIP, (a) => this.AccountManager.SaveRefreshToken(a));
            return Ok();
        }

    }

}


