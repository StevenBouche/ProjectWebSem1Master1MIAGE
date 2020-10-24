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

        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            this.Manager.DeleteAccount(id);
            return Ok();
        }

        [HttpGet("{id}")]
        public AccountView Get(string id)
        {
            return this.Manager.GetAccountById(id).ToAccountView();
        }

        [HttpGet]
        public List<AccountView> Get()
        {
            return this.Manager.GetAllAccount().Select(account => account.ToAccountView()).ToList();   
        }

        [HttpPut]
        public AccountView Put([FromBody] AccountView element)
        {
            this.Manager.UpdateAccountFromView(element);
            return element;
        }

    }
}
