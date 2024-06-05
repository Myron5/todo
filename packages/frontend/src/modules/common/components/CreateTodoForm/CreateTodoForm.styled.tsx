import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Button, Stack } from '@mui/material';

import { media } from '../../../helpers';

export const BasicForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${media('sm', 'width: 300px;')}
  ${media('md', 'width: 400px;')}
  ${media('lg', 'width: 500px;')}
`;

export const MyButtonGroup = styled(Stack)`
  flex-direction: row;
  justify-content: space-between;
`;

// -------------------- ErrorBox --------------------

interface IErrorBox {
  error: boolean | undefined;
  helperText: string | false | undefined;
}

export const ErrorTxt = styled.p`
  color: red;
`;

export const ErrorBox: React.FC<IErrorBox> = ({ error, helperText }) => {
  if (!error) return null;
  if (!helperText) return null;

  return <ErrorTxt>{helperText}</ErrorTxt>;
};

// -------------------- MyButton --------------------
interface IMyButton {
  children?: ReactNode | ReactNode[];
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
// -----------------------------------------------
