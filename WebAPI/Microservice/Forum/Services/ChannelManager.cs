using AuthMiddleware;
using Forum.Models;
using Forum.Models.Form;
using Forum.Models.View;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forum.Services
{

    public interface IChannelManagerView
    {
        ChannelView GetChannelView();
        RegisterChannelResult CreateChannelView(RegisterChannel channel, UserIdentity identity);
        ChannelPanelView GetChannelPanelView(string idChannel, UserIdentity identity);
    }

    public interface IChannelManager
    {
        List<Channel> GetChannelsForum(string idForum, UserIdentity identity);
        Channel GetChannelForum(string idForum, string idChannel, UserIdentity identity);
        Channel CreateChannel(string idForum, Channel c, UserIdentity identity);
        Message AddNewMessageChannel(string idforum, string idchannel, Message messageV, UserIdentity identity);
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

            //todo verif if is subscript to forum
            this.Manager.AddChannelForum(idForum, channel,identity);

            return channel;
        }

        public ChannelView GetChannelView()
        {
            throw new NotImplementedException();
        }

        public RegisterChannelResult CreateChannelView(RegisterChannel channel, UserIdentity identity)
        {
            RegisterChannelResult result = new RegisterChannelResult();
            Channel c = this.CreateChannel(channel.IdForum, new Channel { Name = channel.NameChannel }, identity);

            result.Channel = c?.ToChannelView();
            result.Forum = this.Manager.GetForumById(channel.IdForum).ToViewForum();

            return result;
        }

        public ChannelPanelView GetChannelPanelView(string idChannel, UserIdentity identity)
        {
            var panel = new ChannelPanelView();

            this.Manager.GetForumAndChannel(idChannel, out ForumObj forum, out Channel channel, identity);

            if (forum == null || channel == null) return panel;

            panel.Channel = channel.ToChannelView();
            panel.Messages = channel.Messages.Select(message => message.ToMessageView()).ToList();

            return panel;
        }

        public Message AddNewMessageChannel(string idforum, string idchannel, Message message, UserIdentity identity)
        {
            return this.Manager.CreateAndAddNewMessage(idforum, idchannel, message, identity);
        }

    }
}
