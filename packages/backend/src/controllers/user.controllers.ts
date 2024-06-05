import { Response, Request } from 'express';
import { v4 as uuid } from 'uuid';

import { HttpError, TryCatch } from '../helpers';
import UserService from '../services/user.service';
import JwtService from '../services/jwt.service';
import MailService from '../services/mail.service';
import { IUser } from '../types/user.type';

export class UserController {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private mailService: MailService
  ) {}

  @TryCatch()
  async current(req: Request, res: Response) {
    const { id, email } = req.user as IUser;
    res.json({ id, email });
  }

  @TryCatch()
  async signUp(req: Request, res: Response) {
    const { email, password } = req.body;
    const newUser = await this.userService.create({ email, password, verifToken: uuid() });
    this.mailService.sendConfirmEmail(email, newUser.verifToken);
    res.status(201).send();
  }

  @TryCatch()
  async signIn(req: Request, res: Response) {
    const user = await this.userService.verify(req.body);
    if (!user) {
      HttpError(res, 401);
      return;
    }
    if (user.verifToken !== '') {
      HttpError(res, 403, 'Please verify your email');
      return;
    }
    const token = this.jwtService.generateToken(user.id);
    res.json({ token, id: user.id });
  }

  @TryCatch()
  async sendResetPasswordLink(req: Request, res: Response) {
    const { email } = req.body;
    const user = await this.userService.setResetPassToken({ email, resetPassToken: uuid() });
    if (!user) {
      HttpError(res, 404, 'User not found');
      return;
    }
    this.mailService.sendConfirmResetPassword(email, user.resetPassToken);
    res.send();
  }

  @TryCatch()
  async changePassword(req: Request, res: Response) {
    const { newpassword } = req.body;
    const { resetPassToken } = req.params;
    const user = await this.userService.changePassword({ resetPassToken, password: newpassword });
    if (!user) {
      HttpError(res, 404, 'User not found');
      return;
    }
    res.json(user);
  }

  @TryCatch()
  async verifyEmail(req: Request, res: Response) {
    const newUser = await this.userService.confirmEmail(req.params.verifToken);
    if (!newUser) {
      HttpError(res, 404, 'Already verified');
      return;
    }
    const token = this.jwtService.generateToken(newUser.id);
    res.json({ token, id: newUser.id });
  }
}

const userController = new UserController(new UserService(), new JwtService(), new MailService());
export default userController;
