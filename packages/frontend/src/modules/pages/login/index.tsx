import React from 'react';
import { Stack } from '@mui/material';

import { LoginForm } from '../../common/components/LoginForm';

const LoginContainer = () => (
  <Stack sx={{ textAlign: 'center', alignItems: 'center', mt: 'calc(15vh + 20px)', mb: '40px' }}>
    <LoginForm />
  </Stack>
);

export default LoginContainer;
