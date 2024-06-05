import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { OTHER } from '../../../theme';
import { media } from '../../../helpers';
import { SIZES } from '../../consts';

interface IChildren {
  children: ReactNode | ReactNode[];
}

export const Element = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 20px;
  width: 300px;
  height: 275px;
  box-shadow: ${OTHER.shadow};
`;

export const ElementExt = styled(Element)`
  width: 365px;
  height: 275px;
  margin: 20px 0;
  margin-left: 15px;
  padding: 20px 30px;
`;

export const Name = styled('h3')<IChildren & { isCompleted: boolean }>`
  overflow: hidden;
  max-width: 145px;
  ${({ isCompleted }) => isCompleted && 'text-decoration: line-through;'}
`;

export const Description = styled('p')<IChildren & { isCompleted: boolean }>`
  height: 100px;
  maxwidth: 100%;
  overflow: hidden;
  ${media(SIZES.LG, 'max-width: 300px;  height: 40px;')}
  ${({ isCompleted }) => isCompleted && 'text-decoration: line-through;'}
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

// -------------------- MyButton --------------------
interface IMyButton {
  children?: ReactNode | ReactNode[];
  onClick?: () => void;
  disabled?: boolean;
}

export const BtnStyled = styled(Button)<IMyButton>`
  max-width: 200px;
  height: 25px;
`;

export const MyButton: React.FC<IMyButton> = ({ children, ...otherProps }) => (
  <BtnStyled {...otherProps} size="small" variant="outlined">
    {children}
  </BtnStyled>
);
// -------------------------------------------------
