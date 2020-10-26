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
            return this.Manager.CreateAccount(new Account { Email = element.Email, Password = element.Password }).ToAccountView();
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
