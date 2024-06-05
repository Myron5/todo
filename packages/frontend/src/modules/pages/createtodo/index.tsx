import React from 'react';
import { Stack } from '@mui/material';

import { CreateTodoForm } from '../../common/components/CreateTodoForm';

const CreateTodoContainer = () => (
  <Stack sx={{ textAlign: 'center', alignItems: 'center', mt: 'calc(10vh + 20px)', mb: '40px' }}>
    <CreateTodoForm />
  </Stack>
);

export default CreateTodoContainer;
