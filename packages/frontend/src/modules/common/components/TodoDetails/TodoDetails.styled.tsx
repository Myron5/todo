import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Box, Button, Typography } from '@mui/material';

interface IChildren {
  children: ReactNode | ReactNode[];
}

export const Title: React.FC<IChildren> = ({ children, ...otherProps }) => (
  <Typography
    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
    {...otherProps}
    variant="h3"
    gutterBottom
  >
    {children}
  </Typography>
);

export const Description: React.FC<IChildren> = ({ children, ...otherProps }) => (
  <Box {...otherProps} sx={{ mt: '60px' }}>
    <Typography variant="h5" gutterBottom>
      Description
    </Typography>
    <Typography
      sx={{
        mt: '40px',
        minHeight: '200px',
        p: '10px 20px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
      }}
    >
      {children}
    </Typography>
  </Box>
);

export const ErrorBox = styled.div`
  min-height: 40px;
  height: 38vh;
  width: 100%;
  display: grid;
  place-items: cnter;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

// -------------------- MyButton --------------------
interface IMyButton {
  children?: ReactNode | ReactNode[];
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  isGoBack?: boolean;
}

export const BtnStyled = styled(Button)<IMyButton>`
  width: 70px;
`;

export const MyButton: React.FC<IMyButton> = ({ children, isGoBack, ...otherProps }) => (
  <BtnStyled
    style={{ marginTop: isGoBack ? '20px' : '0' }}
    {...otherProps}
    size="small"
    variant="outlined"
  >
    {children}
  </BtnStyled>
);
// -----------------------------------------------
