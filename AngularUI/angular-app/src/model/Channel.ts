import Message from 'src/model/Message'

export default class Channel {
    public id: string;
    public name: string;
    messages: Message[];
}