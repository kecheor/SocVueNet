import IUser from '@/models/IUser';

export default class UserDto implements IUser {
    public Login: string = "1@";
    public Password: string = "123";
    public PublicId: string = "";
    public Name: string = "test";
    public Lastname: string = "";
    public Gender: string = "";
    public Location: string = "";
    public Interests: Array<string> = [];
}