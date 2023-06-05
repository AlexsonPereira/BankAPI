import { compareSync } from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../entities/users.entitie";
import { AppError } from "../errors/AppError";
interface ISessionRequest {
  email: string;
  password: string;
}

class SessionService {
  async create({ email, password }: ISessionRequest) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new AppError("User not found", 404);
    }
    const passwordValid = compareSync(password, user.password);
    if (!passwordValid) {
      throw new AppError("User or password invalid");
    }

    const token = jwt.sign({}, process.env.SECRETKEY || "SECRET_KEY", {
      subject: user.id + "",
      expiresIn: "24h",
    });

    return { token };
  }
}

const sessionService = new SessionService();

export { sessionService };
