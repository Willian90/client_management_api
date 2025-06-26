import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../entities/user.entity";
import { generateToken } from "../helper/auth";

class AuthController {
  register = async (req: Request, res: Response) => {
    // #swagger.tags = ['Auth']
    // #swagger.security = []  // 👈 Without token
    try {
      const { name, surename, email, password } = req.body;

      const passwordhash = await bcrypt.hash(password, 10);

      console.log(password, passwordhash);
      const user = await User.save({
        name,
        surename,
        email,
        password: passwordhash,
      });
      if (!user) throw new Error("no saved");
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json(error.message);
      }
    }
  };

  login = async (req: Request, res: Response) => {
    // #swagger.tags = ['Auth']
    // #swagger.security = []  // 👈 Without token
    try {
      const { email, password } = req.body;

      const user = await User.findOneBy({ email });
      if (!user) {
        res.status(400).json({ message: "email no found" });
        return;
      }

      const isValid = await bcrypt.compare(password, user?.password as string);

      if (!isValid) {
        res.status(400).json({ message: "the password is not correct" });
        return;
      }

      const payload = {
        iduser: user.id_user,
        user: user.name + " " + user.surename,
        email,
      };
      const token = generateToken(payload);
      res.status(200).json({ token: token });
      return;
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
        return;
      }
    }
  };
}
export default new AuthController();
