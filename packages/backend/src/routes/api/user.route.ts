import { Router } from 'express';
import { User, UserEntityType } from '../../entities/User';
import { accessVerify, alreadyExist, validateBody } from '../../middlewares';
import userController from '../../controllers/user.controllers';
import {
  TypeResetPasswordSchema,
  TypeSendResetPasswordSchema,
  TypeUserSchema,
  resetPasswordSchema,
  sendResetPasswordSchema,
  userSchema
} from '../../schemas';

const router: Router = Router();

router.get('/current', accessVerify('jwt'), userController.current.bind(userController));

router.post(
  '/register',
  validateBody<TypeUserSchema>(userSchema),
  alreadyExist<UserEntityType>(User, 'email'),
  userController.signUp.bind(userController)
);

router.post(
  '/login',
  validateBody<TypeUserSchema>(userSchema),
  userController.signIn.bind(userController)
);

router.post(
  '/send-resetpassword',
  validateBody<TypeSendResetPasswordSchema>(sendResetPasswordSchema),
  userController.sendResetPasswordLink.bind(userController)
);

router.post(
  '/resetpassword/:resetPassToken',
  validateBody<TypeResetPasswordSchema>(resetPasswordSchema),
  userController.changePassword.bind(userController)
);

router.get('/verify/:verifToken', userController.verifyEmail.bind(userController));

export default router;
