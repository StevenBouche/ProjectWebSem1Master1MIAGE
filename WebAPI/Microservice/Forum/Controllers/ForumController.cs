using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AuthMiddleware;
using Forum.Models.View;
using Forum.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Forum.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    [Authorize]
    public class ForumController : ControllerBase
    {
        IForumManager Manager;

        private UserIdentity Identity
        {
            get
            {
                return this.User is null ? null : new UserIdentity(this.User);
            }
        }

       
        public ForumController(IForumManager forumManager)
        {
            this.Manager = forumManager;
        }

        [HttpPost("create")]
        public ActionResult<ForumView> CreateForum([FromBody] ForumForm value)
        {
            ForumView forum = this.Manager.CreateForum(value,this.Identity.ID);
            return this.Ok(forum);
        }

        [HttpPost("search")]
        public ActionResult<ForumSearchView> SearchForums([FromBody] ForumSearchView search)
        {
            ForumSearchView searchResult = this.Manager.SearchForums(search, this.Identity.ID);
            return this.Ok(searchResult);
        }

        [HttpGet("subscribe/{id}")]
        public ActionResult<string> SubForum(string idForum)
        {
            string result = this.Manager.UserSubscribe(idForum, this.Identity.ID);
            return this.Ok(result);
        }

    }
}
