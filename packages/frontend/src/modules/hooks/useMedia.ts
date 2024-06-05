import { useMediaQuery } from 'usehooks-ts';
import { MOBILE, TABLET, DESKTOP } from '../common/consts';

export function useMedia() {
  const mediaString = (val: number) => `(min-width: ${val}px)`;

  const matchesMobile = useMediaQuery(mediaString(MOBILE));
  const matchesTablet = useMediaQuery(mediaString(TABLET));
  const matchesDesktop = useMediaQuery(mediaString(DESKTOP));

  if (matchesDesktop) return 'lg';
  if (matchesTablet) return 'md';
  if (matchesMobile) return 'sm';

  return null;
}
