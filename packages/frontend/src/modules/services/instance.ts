import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:4200'
});

export const setToken = (token: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const deleteToken = () => {
  instance.defaults.headers.common.Authorization = '';
};
