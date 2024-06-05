import React, { ReactNode } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import styled from 'styled-components';
import { Swiper, useSwiper } from 'swiper/react';
import SwiperType from 'swiper';
import 'swiper/css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const WrapBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Name = styled.h3`
  overflow: hidden;
  max-width: 145px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ButtonGroupExt = styled(ButtonGroup)`
  justify-content: space-between;
  padding: 0 30px;
`;

export const ErrorBox = styled.div`
  min-height: 40px;
  height: 38vh;
  width: 100%;
  display: grid;
  place-items: cnter;
`;

// -------------------- MyButton --------------------
interface IMyButton {
  children?: ReactNode | ReactNode[];
  onClick?: () => void;
  backBtn?: boolean;
}

export const BtnStyled = styled(Button)<IMyButton>`
  max-width: 200px;
  height: 25px;
`;

export const MyButton: React.FC<IMyButton> = ({ children, backBtn, ...otherProps }) => (
  <BtnStyled
    style={{ marginTop: backBtn ? '20px' : 0 }}
    {...otherProps}
    size="small"
    variant="outlined"
  >
    {children}
  </BtnStyled>
);
// -------------------------------------------------

export const SwiperButton: React.FC<{ type: 'prev' | 'next' }> = ({ type }) => {
  const swiper = useSwiper();

  const onClick = () => {
    if (type === 'prev') swiper.slidePrev();
    else swiper.slideNext();
  };

  return (
    <MyButton onClick={onClick}>
      {type === 'prev' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </MyButton>
  );
};

/**
 * BasicTable
 */

interface IChildren {
  children: ReactNode | ReactNode[];
}

export const BasicTable: React.FC<IChildren> = ({ children }) => (
  <TableContainer component={Paper}>
    <Table sx={{ width: '90%', margin: '0 auto' }} aria-label="Table of todos">
      <TableHead>
        <TableRow>
          <TableCell>
            <Name>Todo Title</Name>
          </TableCell>
          <TableCell>Description</TableCell>
          <TableCell align="center">Actions</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>{children}</TableBody>
    </Table>
  </TableContainer>
);

/**
 * SliderSwiper
 */

interface ISlider extends IChildren {
  onSlideChange: (swiper: SwiperType) => void;
}

export const Slider: React.FC<ISlider> = ({ onSlideChange, children }) => (
  <Swiper style={{ position: 'static' }} onSlideChange={onSlideChange}>
    {children}
    <ButtonGroupExt>
      <SwiperButton type="prev" />
      <SwiperButton type="next" />
    </ButtonGroupExt>
  </Swiper>
);

/**
 * List
 */

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
`;
