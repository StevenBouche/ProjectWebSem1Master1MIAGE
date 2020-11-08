using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AuthMiddleware;
using Forum.Services;
using Forum.SignalR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace Forum.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    [Authorize]
    public class MessageController : ControllerBase
    {

        IForumManagerView Manager;
        private readonly IHubContext<ForumHub> HubContext;

        private UserIdentity Identity
        {
            get
            {
                return this.User is null ? null : new UserIdentity(this.User);
            }
        }


        public MessageController(IForumManagerView forumManager, IHubContext<ForumHub> hubContext)
        {
            this.Manager = forumManager;
            this.HubContext = hubContext;
        }




    }
}
