import { useState } from 'react';

export function useToggle(initialState: boolean = false) {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = (newState?: boolean | undefined) => {
    if (newState !== undefined) {
      setState(newState);
    } else setState((prev) => !prev);
  };
  return [state, toggle] as [typeof state, typeof toggle];
}
