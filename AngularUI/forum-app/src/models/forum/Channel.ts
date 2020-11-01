import Message from 'src/models/forum/Message'

export default class Channel {
    public id: string;
    public name: string;
    messages: Message[];
}