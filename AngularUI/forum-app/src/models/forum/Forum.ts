import Channel from './Channel'
import User from './User'

export default class Forum {
    public id: string;
    public urlPicture: string;
    public name: string;
    public channels: Channel[];
    public users: User[];
}