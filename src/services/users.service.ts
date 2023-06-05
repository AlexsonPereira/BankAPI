import { User } from "../entities/users.entitie";

class UsersService {
  async create({ name, email, password }: IUserRequest) {
    const user = await User.create({ name, email, password });
    return user;
  }

  async listAll() {
    const users = await User.find({});
    console.log(users)
    return users;
  }

  async listOne(id: string) {
    const user = await User.findById({ _id: id });
    return user;
  }

  async update(id: string, data: IUserUpdate) {
    await User.updateOne({ _id: id, ...data });
    const updatedUser = await User.findById({ _id: id });
    return updatedUser;
  }

  async remove(id: string) {
    await User.findByIdAndDelete({ _id: id });
  }
}

const usersService = new UsersService();

export { usersService };
