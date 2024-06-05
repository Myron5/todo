import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Button, Modal } from '@mui/material';

import { OTHER } from '../../../theme';

export const MyModal = styled(Modal)`
  @media (max-height: 600px) {
    overflow-y: scroll;
  }
`;

export const BasicForm = styled.form`
  width: 80%;
  margin: calc(5vh + 40px) auto;
  padding: 40px 60px;
  background-color: #fff;
  box-shadow: ${OTHER.shadow};
`;

export const ToRightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const FiledsBox = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Actions = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Action = styled.div`
  display: flex;
  justify-content: space-between;
`;

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
