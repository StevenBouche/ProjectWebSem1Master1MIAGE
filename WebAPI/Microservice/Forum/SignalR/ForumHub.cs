using Forum.Models.View;
using Forum.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace Forum.SignalR
{
    public interface IForumHub
    {
        Task OnNewMessage(RegisterMessage message);
    }

    [Authorize(AuthenticationSchemes = "Bearer")]
    public class ForumHub : Hub<IForumHub>
    {
        CacheUserWs Cache;

        public ForumHub(CacheUserWs cache)
        {
            this.Cache = cache;
        }

        public override async Task OnConnectedAsync()
        {
            await Groups.AddToGroupAsync(this.GetIdUser(), "users");
            await base.OnConnectedAsync();
            Console.WriteLine("Connected");
            this.Cache.UserConnect(this.GetIdUser(), GetIdWsUser());
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            await Groups.RemoveFromGroupAsync(this.GetIdUser(), "users");
            await base.OnDisconnectedAsync(exception);
            Console.WriteLine("Disconnect");
            this.Cache.UserDisconnect(this.GetIdUser(), GetIdWsUser());
        }

        public string GetIdUser()
        {
            return this.Context.UserIdentifier;
        }

        public string GetIdWsUser()
        {
            return this.Context.ConnectionId;
        }

    }
}
