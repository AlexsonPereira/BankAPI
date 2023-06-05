import { User } from "../entities/users.entitie";

class SessionService {
  async create({ email, password }) {
    const user = await User.findOne({ email });
    console.log(user);
  }
}

const sessionService = new SessionService();

export { sessionService };
