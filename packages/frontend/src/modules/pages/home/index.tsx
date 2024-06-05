import React from 'react';
import { Box, Button, Link, Stack } from '@mui/material';

import { APP_KEYS } from '../../common/consts';
import { useAuth, useNavigateBackForward } from '../../hooks';

const HomePageContainer = () => {
  const { goForward } = useNavigateBackForward();
  const { isLogged, logout } = useAuth();

  const goToResetPassword = () => goForward(APP_KEYS.ROUTER_KEYS.SENDRESETPASSWORD);

  return (
    <Box sx={{ textAlign: 'center', mt: '30px', mb: '40px' }}>
      <h1>My Todo App</h1>

      <Stack spacing={3} sx={{ marginTop: '50px' }}>
        <Stack spacing={2} sx={{ alignItems: 'center' }}>
          {isLogged ? (
            <>
              {/* To App */}
              <Button
                sx={{ width: '200px' }}
                variant="outlined"
                onClick={() => goForward(APP_KEYS.ROUTER_KEYS.TODOS)}
              >
                To App
              </Button>

              {/* Logout */}
              <Button sx={{ width: '200px' }} variant="outlined" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              {/* Login */}
              <Button
                sx={{ width: '200px' }}
                variant="outlined"
                onClick={() => goForward(APP_KEYS.ROUTER_KEYS.LOGIN)}
              >
                Login
              </Button>

              {/* Register */}
              <Button
                sx={{ width: '200px' }}
                variant="outlined"
                onClick={() => goForward(APP_KEYS.ROUTER_KEYS.REGISTER)}
              >
                Register
              </Button>
            </>
          )}
        </Stack>

        <Link onClick={goToResetPassword} underline="hover">
          Forgot Password ?
        </Link>
      </Stack>
    </Box>
  );
};

export default HomePageContainer;
