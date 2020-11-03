using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace Forum.SignalR
{

    [Authorize(AuthenticationSchemes = "Bearer")]
    public class ForumHub : Hub
    {

        public ForumHub(IUserIdProvider userId)
        {

        }

        public override async Task OnConnectedAsync()
        {
            await Groups.AddToGroupAsync(this.GetIdUser(), "SignalR Users");

            await base.OnConnectedAsync();
            Console.WriteLine("Connected");
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            await Groups.RemoveFromGroupAsync(this.GetIdUser(), "SignalR Users");
            await base.OnDisconnectedAsync(exception);
            Console.WriteLine("Disconnect");
        }

        public async Task SendMessage(string message)
        {
            await Clients.All.SendAsync("newMessage", this.GetIdUser(), message);
        }

        private string GetIdUser()
        {
            return this.Context.UserIdentifier;
        }

    }
}
