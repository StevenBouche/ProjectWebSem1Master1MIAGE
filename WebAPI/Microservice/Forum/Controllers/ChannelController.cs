using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AuthMiddleware;
using Forum.Models.Form;
using Forum.Models.View;
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
    public class ChannelController : ControllerBase
    {

        IChannelManagerView Manager;
        private readonly IHubContext<ForumHub> HubContext;

        private UserIdentity Identity
        {
            get
            {
                return this.User is null ? null : new UserIdentity(this.User);
            }
        }

        public ChannelController(IChannelManagerView channelManager, IHubContext<ForumHub> hubContext)
        {
            this.Manager = channelManager;
            this.HubContext = hubContext;
        }

        [HttpPost("create")]
        public async Task<ActionResult<RegisterChannelResult>> CreateChannel([FromBody] RegisterChannel channel)
        {
            RegisterChannelResult c = this.Manager.CreateChannelView(channel, this.Identity);
            await this.HubContext.Clients.AllExcept(new string[] { Identity.ID }).SendAsync("onNewChannel", c);
            return this.Ok(c);
        }

        [HttpPost("delete")]
        public async Task<ActionResult<DeleteChannelForm>> DeleteChannel([FromBody] DeleteChannelForm channel)
        {
            DeleteChannelForm c = this.Manager.DeleteChannel(channel, this.Identity);
            await this.HubContext.Clients.AllExcept(new string[] { Identity.ID }).SendAsync("onDeleteChannel", c);
            return this.Ok(c);
        }

        [HttpGet("panel/{id}")]
        public ActionResult<ChannelPanelView> GetChannelPanel(string id)
        {
            return this.Ok(this.Manager.GetChannelPanelView(id, this.Identity));
        }

    }
}
