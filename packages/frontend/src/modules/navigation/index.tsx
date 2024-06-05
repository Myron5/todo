import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PrivateRoute, Layout } from './navcomponents';
import NotFoundContainer from '../pages/notfound';
import { APP_KEYS } from '../common/consts';

const HomePageContainer = lazy(() => import('../pages/home'));
const LoginContainer = lazy(() => import('../pages/login'));
const RegisterContainer = lazy(() => import('../pages/register'));
const TodosContainer = lazy(() => import('../pages/todos'));
const TodoDetailsContainer = lazy(() => import('../pages/tododetails'));
const CreateTodoContainer = lazy(() => import('../pages/createtodo'));
const SendResetPasswordFormContainer = lazy(() => import('../pages/sendresetpassword'));
const ResetPasswordFormContainer = lazy(() => import('../pages/resetpassword'));
const ConfirmEmailContainer = lazy(() => import('../pages/confirmemail'));

export const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={APP_KEYS.ROUTER_KEYS.ROOT} element={<Layout />}>
        <Route index element={<HomePageContainer />} />

        <Route path={APP_KEYS.ROUTER_KEYS.LOGIN} element={<LoginContainer />} />

        <Route path={APP_KEYS.ROUTER_KEYS.REGISTER} element={<RegisterContainer />} />

        <Route
          path={APP_KEYS.ROUTER_KEYS.TODOS}
          element={
            <PrivateRoute redirectTo={APP_KEYS.ROUTER_KEYS.LOGIN} component={<TodosContainer />} />
          }
        />

        <Route
          path={APP_KEYS.ROUTER_KEYS.TODODETAILS}
          element={
            <PrivateRoute
              redirectTo={APP_KEYS.ROUTER_KEYS.LOGIN}
              component={<TodoDetailsContainer />}
            />
          }
        />

        <Route
          path={APP_KEYS.ROUTER_KEYS.CREATETODO}
          element={
            <PrivateRoute
              redirectTo={APP_KEYS.ROUTER_KEYS.LOGIN}
              component={<CreateTodoContainer />}
            />
          }
        />

        <Route
          path={APP_KEYS.ROUTER_KEYS.SENDRESETPASSWORD}
          element={<SendResetPasswordFormContainer />}
        />

        <Route path={APP_KEYS.ROUTER_KEYS.RESETPASSWORD} element={<ResetPasswordFormContainer />} />

        <Route path={APP_KEYS.ROUTER_KEYS.CONFIRMEMAIL} element={<ConfirmEmailContainer />} />
      </Route>

      <Route path="*" element={<NotFoundContainer />} />
    </Routes>
  </BrowserRouter>
);
