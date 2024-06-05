import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

interface IChildren {
  children?: ReactNode | ReactNode[];
}

export const BarBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Name: React.FC<IChildren> = ({ children }) => (
  <Typography sx={{ m: 0 }} variant="subtitle1" gutterBottom>
    {children}
  </Typography>
);

// -------------------- MyButton --------------------
interface IMyButton extends IChildren {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}

export const BtnStyled = styled(Button)<IMyButton>`
  width: 70px;
`;

export const MyButton: React.FC<IMyButton> = ({ children, ...otherProps }) => (
  <BtnStyled {...otherProps} size="small" variant="outlined">
    {children}
  </BtnStyled>
);
// --------------------------------------------------
// -------------------- HomeButton ------------------

interface IHomeButton {
  onClick: () => void;
}

export const SimpleButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
`;

export const HomeButton: React.FC<IHomeButton> = ({ onClick }) => (
  <SimpleButton onClick={onClick}>
    <HomeIcon />
  </SimpleButton>
);
// -------------------------------------------------
