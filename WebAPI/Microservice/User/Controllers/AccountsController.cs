using System.Collections.Generic;
using System.Linq;
using AuthMiddleware;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using User.Model.Users;
using User.Model.ViewModel;
using User.Model.ViewModel.Auth;
using User.Services;

namespace User.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    [Authorize]
    public class AccountsController : ControllerBase
    {

        private readonly IAccountsManager Manager;
        private UserIdentity Identity
        {
            get
            {
                return this.User is null ? null : new UserIdentity(this.User);
            }
        }

        public AccountsController(IAccountsManager manager)
        {
            this.Manager = manager;
        }

        [AllowAnonymous]
        [HttpPost]
        public AccountView Create([FromBody] RegisterView element)
        {
            return this.Manager.CreateAccount(
                new Account {
                    Profil = new UserProfil
                    {
                        FirstName = element.FirstName,
                        LastName = element.LastName,
                        Role = UserRole.USER
                    },
                    Email = element.Email,
                    Password = element.Password,
                    Pseudo = element.Pseudo,
                    Image = element.Image,
                    AdressIPAuthorize = new List<string> { element.AddressIP }
                }).ToAccountView();
        }

        /*  [HttpDelete("{id}")]
          public ActionResult Delete(string id)
          {
              this.Manager.DeleteAccount(id);
              return Ok();
          }*/

        [HttpGet("identity")]
        public ActionResult<AccountView> MyIdentity()
        {
           return Ok(this.Manager.GetAccountById(this.Identity.ID).ToAccountView());
        }

        [AllowAnonymous]
        [HttpGet("picture/{id}")]
        public ActionResult UserPicture(string id)
        {
            return Ok(this.Manager.GetPictureUser(id));
        }

        [HttpGet("{id}")]
        public ActionResult<AccountView> Get(string id)
        {
            if (this.Identity.Role.Equals("ADMIN"))
                return Ok(this.Manager.GetAccountById(id).ToAccountView());
            else return Unauthorized();
        }

        [HttpGet]
        public ActionResult<List<AccountView>> Get()
        {
            if (this.Identity.Role.Equals("ADMIN"))
                return Ok(this.Manager.GetAllAccount().Select(account => account.ToAccountView()).ToList());
            else return Unauthorized();
        }

        [HttpPut]
        public AccountView Put([FromBody] AccountView element)
        {
            element.ID = this.Identity.ID;
            this.Manager.UpdateAccountFromView(element);
            return element;
        }

    }
}
