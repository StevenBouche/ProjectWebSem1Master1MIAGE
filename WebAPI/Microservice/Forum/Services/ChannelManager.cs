using AuthMiddleware;
using Forum.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forum.Services
{
    public class ChannelManager
    {

        ForumManager Manager;

        public ChannelManager(ForumManager forumManager)
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
