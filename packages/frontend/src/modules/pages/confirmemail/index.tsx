import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography, Link } from '@mui/material';

import { useAuth, useVerify } from '../../hooks';
import { Spinner } from '../../common/components/Other';
import { APP_KEYS } from '../../common/consts';

const ConfirmEmailContainer = () => {
  const { confirmToken = '' } = useParams();
  const navigate = useNavigate();
  const { data, status } = useVerify(confirmToken);
  const { login } = useAuth();

  const goToHome = () => navigate(APP_KEYS.ROUTER_KEYS.ROOT, { replace: true });

  useEffect(() => {
    if (status === 'success') {
      login(data.token);
    }
  }, [status]);

  if (status === 'loading') return <Spinner />;

  if (status === 'error') {
    return <Typography>Error, token not confirmed!</Typography>;
  }

  return (
    <div>
      <Typography>Email confirmed!</Typography>

      <Link onClick={goToHome} underline="hover">
        Get Started
      </Link>
    </div>
  );
};

export default ConfirmEmailContainer;
