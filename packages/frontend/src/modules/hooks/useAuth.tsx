import React, { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { deleteToken, getCurrent, setToken } from '../services';
import { notify } from '../helpers';
import { APP_KEYS } from '../common/consts';

interface IChildren {
  children?: ReactNode | ReactNode[];
}

type IAuthContext = {
  user: string | null;
  userId: string | null;
  isLogged: boolean;
  login: (username: string) => Promise<void>;
  logout: () => void;
};
const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider: React.FC<IChildren> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [isLogged, setIsLogged] = useState(false);

  const login = async (token: string) => {
    try {
      setToken(token);
      localStorage.setItem(APP_KEYS.STORAGE_KEYS.JWT_TOKEN, token);
      const { id, email } = await getCurrent();
      setUser(email);
      setUserId(String(id));
      setIsLogged(true);
    } catch {
      if (token) {
        notify.error('Error, you should login again!');
      }
    }
  };

  const logout = () => {
    deleteToken();
    localStorage.setItem(APP_KEYS.STORAGE_KEYS.JWT_TOKEN, '');
    setUser(null);
    setUserId(null);
    setIsLogged(false);
  };

  useEffect(() => {
    const token = localStorage.getItem(APP_KEYS.STORAGE_KEYS.JWT_TOKEN);
    if (token) {
      login(token);
    }
  }, []);

  // useMemo for preventing error below:
  // To fix this consider wrapping it in a useMemo hook.e
  const contextValue = useMemo(
    () => ({ user, userId, isLogged, login, logout }),
    [user, userId, isLogged]
  );
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
