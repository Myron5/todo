import { useMutation, useQuery } from 'react-query';
import { AxiosError } from 'axios';

import {
  confirmEmail,
  getCurrent,
  login,
  register,
  resetPassword,
  sendResetPassword
} from '../services';
import { notify } from '../helpers';
import { APP_KEYS } from '../common/consts';

export function useUser() {
  return useQuery([APP_KEYS.QUERY_KEYS.USER], getCurrent);
}

const onError = (error: AxiosError<{ message: string }>) => {
  const { response, message } = error;
  notify.error(response?.data?.message || message);
};

export function useRegister() {
  const mutation = useMutation(register, {
    onSuccess: () => {
      notify.success('Registrated successfully, check our email to verify!');
    },
    onError
  });
  return mutation;
}

export function useLogin() {
  const mutation = useMutation(login, {
    onSuccess: () => {
      notify.success('Login successfully!');
    },
    onError
  });
  return mutation;
}

export function useSendResetPassword() {
  const mutation = useMutation(sendResetPassword, {
    onSuccess: () => {
      notify.success('Check your email!');
    },
    onError
  });
  return mutation;
}

export function useResetPassword() {
  const mutation = useMutation(resetPassword, {
    onSuccess: () => {
      notify.success('New password setted successfully!');
    },
    onError
  });
  return mutation;
}

export function useVerify(verifToken: string) {
  return useQuery([APP_KEYS.QUERY_KEYS.USER, verifToken], () => confirmEmail(verifToken), {
    onSuccess: () => {
      notify.success('Confirmed successfully!');
    },
    onError
  });
}
