import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks';

interface IProps {
  component: React.ReactElement;
  redirectTo?: string;
  // [x: string]: any;
}

export const PrivateRoute: React.FC<IProps> = ({ component, redirectTo = '/' }) => {
  const { isLogged } = useAuth();
  const location = useLocation();

  const shouldRedirect = !isLogged;
  return shouldRedirect ? <Navigate to={redirectTo} state={{ from: location }} /> : component;
};
