import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import styled from 'styled-components';
import { Spinner } from '../../common/components/Other/Spinner';
import { adaptBoxCss } from '../../helpers';
import { Bar } from '../../common/components/Bar';

const AdaptContainer = styled.div`
  ${adaptBoxCss}
`;

export const Layout = () => (
  <div>
    <Suspense fallback={<Spinner />}>
      <AdaptContainer>
        <Bar />
        <Outlet />
      </AdaptContainer>
    </Suspense>
    <ToastContainer position="bottom-right" newestOnTop />
  </div>
);
