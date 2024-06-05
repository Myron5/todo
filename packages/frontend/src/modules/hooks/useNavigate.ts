import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { APP_KEYS } from '../common/consts';

export function useNavigateBackForward() {
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkLocationRef = useRef(location.state?.from ?? APP_KEYS.ROUTER_KEYS.ROOT);

  const goBack = () => {
    navigate(backLinkLocationRef.current, { state: { from: location } });
  };

  const goForward = (path: string) => {
    navigate(path, { state: { from: location } });
  };

  return { goBack, goForward };
}
