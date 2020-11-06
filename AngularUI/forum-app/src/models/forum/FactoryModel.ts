

import Forum from 'src/models/forum/Forum'
import Channel from 'src/models/forum/Channel'
import Message from 'src/models/forum/Message'
import User from 'src/models/forum/User'

export default class FactoryModel {


    static createForums() : Forum[]{
        var forums = new Array<Forum>();
        for(let i = 0; i < 10; i++){
            forums.push(FactoryModel.createForum(""+i,"Forum "+i))
        }
        return forums;
    }

    static createForum(id:string,name: string) : Forum {
        var forum = new Forum();
        forum.id = id;
        forum.name = name;
        forum.channels = FactoryModel.createChannels(name);
        forum.users = FactoryModel.createUsers();
        forum.urlPicture = "/assets/forum"+id+".jpg";
        forum.description = "this is my description text "+id;
        return forum;
    }

    static createChannels(nameForum:string) : Channel[]{
        var channels = new Array<Channel>();
        for(let i = 0; i < 10; i++){
            channels.push(FactoryModel.createChannel(""+i,"channel "+i+" "+nameForum))
        }
        return channels;
    }

    static createChannel(id:string,name:string) : Channel {
        var channel = new Channel();
        channel.id = id;
        channel.name = name;
        channel.messages = FactoryModel.createMessages(name);
        return channel;
    }

    static createMessages(value:string) : Message[] {
        var messages = new Array<Message>();
        for(let i = 0; i < 10; i++){
            var user = FactoryModel.createUser(""+i,"user"+i,"/assets/avatar ("+i+").jpg")
            messages.push(FactoryModel.createMessage(""+i,"message"+i+" "+value,"date"+i, user ))
        }
        return messages;
    }

    static createMessage(id: string, value: string, date: string, user: User) : Message {
        var message = new Message();
        message.id = id;
        message.value = value;
        message.date = date;
        message.user = user;
        return message;
    }

    static createUsers() :  User[] {
        var users = new Array<User>();
        for(let i = 0; i < 10; i++){
            users.push(FactoryModel.createUser(""+i,"user"+i,"/assets/avatar ("+i+").jpg"))
        }
        return users;
    }

    static createUser(id:string,name:string,urlPicture:string) : User {
        var user = new User();
        user.pseudo = name;
        user.id = id;
        user.urlPicture = urlPicture;
        return user;
    }

    static createCurrentUsers() : User {
        return this.createUser("0","user0","/assets/avatar (0).jpg");
    }

}