using AuthMiddleware;
using Forum.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forum.Services
{

    public interface IChannelManagerView
    {

    }

    public interface IChannelManager
    {
        List<Channel> GetChannelsForum(string idForum, UserIdentity identity);
        Channel GetChannelForum(string idForum, string idChannel, UserIdentity identity);
        Channel CreateChannel(string idForum, Channel c, UserIdentity identity);

    }

    public class ChannelManager : IChannelManagerView, IChannelManager
    {

        IForumManager Manager;

        public ChannelManager(IForumManager forumManager)
        {
            this.Manager = forumManager;
        }

        public List<Channel> GetChannelsForum(string idForum, UserIdentity identity)
        {
            var forum = this.Manager.GetForumById(idForum);

            if (forum == null) return new List<Channel>();

            return forum.Channels;
        }

        public Channel GetChannelForum(string idForum, string idChannel, UserIdentity identity)
        {
            var forum = this.Manager.GetForumById(idForum);
            return forum.Channels.FirstOrDefault(channel => channel.Id == idChannel);
        }

        public Channel CreateChannel(string idForum, Channel c, UserIdentity identity)
        {
            var channel = new Channel
            {
                Name = c.Name,
                Messages = new List<Message>()
            };

            this.Manager.AddChannelForum(idForum, channel);

            return channel;
        }


    }
}
