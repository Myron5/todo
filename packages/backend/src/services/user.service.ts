import { DeepPartial } from 'typeorm';
import bcrypt from 'bcryptjs';

import { User } from '../entities/User';

interface ICreate {
  email: string;
  password: string;
  verifToken: string;
}

interface IVerify {
  email: string;
  password: string;
}

interface ISetResetPassToken {
  resetPassToken: string;
  email: string;
}

interface IChangePassword {
  resetPassToken: string;
  password: string;
}

export default class UserService {
  async create({ email, password, verifToken }: ICreate) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const saved = await User.save({
      email,
      password: hashedPassword,
      verifToken
    } as DeepPartial<User>);
    return saved;
  }

  async verify({ email, password }: IVerify) {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return null;
    }
    return user;
  }

  async setResetPassToken({ email, resetPassToken }: ISetResetPassToken) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return null;
    }
    await User.update(user.id, { resetPassToken });
    return { ...user, resetPassToken };
  }

  async changePassword({ resetPassToken, password }: IChangePassword) {
    const user = await User.findOne({ where: { resetPassToken } });
    if (!user) {
      return null;
    }
    await User.update(user.id, { password: await bcrypt.hash(password, 10), resetPassToken: '' });
    return { user: { ...user, password } };
  }

  async confirmEmail(verifToken: string) {
    const user = await User.findOne({ where: { verifToken } });
    if (!user) {
      return null;
    }
    const newUser = { ...user, verifToken: '' };
    await User.update(user.id, newUser);
    return newUser;
  }
}
