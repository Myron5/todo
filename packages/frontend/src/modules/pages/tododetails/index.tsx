import React from 'react';
import { Box } from '@mui/material';

import { TodoDetails } from '../../common/components/TodoDetails';

const TodoDetailsContainer = () => (
  <Box sx={{ mt: '30px', mb: '40px' }}>
    <TodoDetails />
  </Box>
);

export default TodoDetailsContainer;
