using Microsoft.AspNetCore.SignalR;
using System.Runtime;
using System.Security.Claims;

namespace Forum
{
    public class NameUserIdProvider : IUserIdProvider
    {
        public string GetUserId(HubConnectionContext connection)
        {
            return connection.User.FindFirstValue(ClaimTypes.NameIdentifier);
        }
    }
}