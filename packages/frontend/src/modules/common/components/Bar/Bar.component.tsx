import React from 'react';

import { useAuth, useNavigateBackForward } from '../../../hooks';
import { BarBox, Flex, Name, MyButton, HomeButton } from './Bar.styled';
import { APP_KEYS } from '../../consts';

export const Bar = () => {
  const { isLogged, user } = useAuth();
  const { goForward } = useNavigateBackForward();

  const goHome = () => {
    goForward(APP_KEYS.ROUTER_KEYS.ROOT);
  };

  return (
    <BarBox>
      {isLogged && (
        <Flex>
          <MyButton onClick={() => goForward(APP_KEYS.ROUTER_KEYS.CREATETODO)}>Create</MyButton>
          <Name>{user}</Name>
        </Flex>
      )}
      <HomeButton onClick={goHome} />
    </BarBox>
  );
};
