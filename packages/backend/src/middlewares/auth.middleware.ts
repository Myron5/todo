import passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../entities/User';
import { IUser } from '../types/user.type';

interface IPayload {
  id: string;
}

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

passport.use(
  new Strategy(jwtOptions, async (payload: IPayload, cb: Function) => {
    try {
      const user: IUser | null = await User.findOne({ where: { id: payload.id } });
      if (!user) throw new Error('User not found');
      return cb(null, user);
    } catch (error) {
      cb(error, false);
    }
  })
);

export const accessVerify = (strategy: string) =>
  passport.authenticate(strategy, { session: false });
