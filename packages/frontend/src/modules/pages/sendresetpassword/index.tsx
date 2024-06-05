import React from 'react';
import { Stack } from '@mui/material';

import { SendResetPasswordForm } from '../../common/components/ResetPasswordForm';

const SendResetPasswordFormContainer = () => (
  <Stack sx={{ textAlign: 'center', alignItems: 'center', mt: 'calc(15vh + 20px)', mb: '40px' }}>
    <SendResetPasswordForm />
  </Stack>
);

export default SendResetPasswordFormContainer;
