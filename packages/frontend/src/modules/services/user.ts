import { instance } from './instance';
import { IUser } from '../common/types/user.types';

export const getCurrent = async () => {
  const { data } = await instance.get('/api/user/current');
  return data;
};

export const register = async (fullUser: IUser) => {
  const { email, password } = fullUser;
  const user = { email, password };
  const { data } = await instance.post('/api/user/register', user);
  return data;
};

export const login = async (user: Omit<IUser, 'id'>) => {
  const { data } = await instance.post('/api/user/login', user);
  return data;
};

export const sendResetPassword = async (body: { email: string }) => {
  const { data } = await instance.post('/api/user/send-resetpassword', body);
  return data;
};

export const resetPassword = async (payload: { resetPassToken: string; newpassword: string }) => {
  const { data } = await instance.post(`/api/user/resetpassword/${payload.resetPassToken}`, {
    newpassword: payload.newpassword
  });
  return data;
};

export const confirmEmail = async (verifToken: string) => {
  const { data } = await instance.get(`/api/user/verify/${verifToken}`);
  return data;
};
