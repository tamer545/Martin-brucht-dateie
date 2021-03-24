import UserService from "./UserService";
import User from "./model/User";

export default class UserServiceImpl implements UserService{
    create(user: User): Promise<User> {
        return Promise.resolve(undefined);
    }

    deleteById(id: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    findAll(): Promise<User[]> {
        return Promise.resolve([]);
    }

    findById(id: string): Promise<User> {
        return Promise.resolve(undefined);
    }

    update(user: User): Promise<User> {
        return Promise.resolve(undefined);
    }

}