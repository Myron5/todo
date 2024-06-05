import React from 'react';
import { Box } from '@mui/material';

import { TodoList } from '../../common/components/TodoList';

const TodosContainer = () => (
  <Box sx={{ mt: '30px', mb: '40px' }}>
    <TodoList />
  </Box>
);

export default TodosContainer;
