import User from "./model/User";

export default interface UserService{
    create(user: User): Promise<User>;
    findById(id: string): Promise<User>;
    findAll(): Promise<User[]>;
    update(user: User): Promise<User>;
    deleteById(id: string): Promise<void>;
}