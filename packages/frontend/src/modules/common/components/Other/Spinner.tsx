import React from 'react';
import { Oval } from 'react-loader-spinner';
import styled from '@emotion/styled';

import { COLORS } from '../../../theme';

const CenterBox = styled.div`
  width: 100%;
  height: 35vh;
  min-height: 40px;
  max-height: 100%;
  display: grid;
  place-items: center;
`;

export const Spinner = () => (
  <CenterBox>
    <Oval
      height={80}
      width={80}
      color={COLORS.black}
      secondaryColor={COLORS.secondary}
      ariaLabel="oval-loading"
      strokeWidth={2}
      strokeWidthSecondary={2}
      visible
    />
  </CenterBox>
);

const SmallCenterBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

export const SmallSpinner = () => (
  <SmallCenterBox>
    <Oval
      height={30}
      width={30}
      color={COLORS.black}
      secondaryColor={COLORS.secondary}
      ariaLabel="oval-loading"
      strokeWidth={2}
      strokeWidthSecondary={2}
      visible
    />
  </SmallCenterBox>
);
