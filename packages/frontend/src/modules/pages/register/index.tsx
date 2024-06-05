import React from 'react';
import { Stack } from '@mui/material';

import { RegisterForm } from '../../common/components/RegisterForm';

const RegisterContainer = () => (
  <Stack sx={{ textAlign: 'center', alignItems: 'center', mt: 'calc(15vh + 20px)', mb: '40px' }}>
    <RegisterForm />
  </Stack>
);

export default RegisterContainer;
