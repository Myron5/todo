import React from 'react';
import { Stack } from '@mui/material';

import { ResetPasswordForm } from '../../common/components/ResetPasswordForm';

const ResetPasswordFormContainer = () => (
  <Stack sx={{ textAlign: 'center', alignItems: 'center', mt: 'calc(15vh + 20px)', mb: '40px' }}>
    <ResetPasswordForm />
  </Stack>
);

export default ResetPasswordFormContainer;
