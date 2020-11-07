using AuthMiddleware;
using Forum.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forum.Services
{

    public interface IMessageManagerView
    {

    }

    public interface IMessageManager
    {
  
    }

    public class MessageManager : IMessageManager, IMessageManagerView
    {

        IChannelManager Manager;

        public MessageManager(IChannelManager channelManager)
        {
            this.Manager = channelManager;
        }

        public List<Message> GetMessages(string idForum, string idChannel, UserIdentity identity)
        {

        }

    }

}
