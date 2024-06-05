import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { StyledEngineProvider } from '@mui/material';

import { MainRouter } from '../navigation';
import { AuthProvider } from '../hooks';
import * as theme from '../theme';
import * as Styled from './app.styled';
import '../../style.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      cacheTime: Infinity
    }
  }
});

const AppContainer = () => (
  <AuthProvider>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Styled.GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <MainRouter />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </AuthProvider>
);

export default AppContainer;
