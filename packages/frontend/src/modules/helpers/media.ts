import { MOBILE, TABLET, DESKTOP, SIZES, TypeSizes } from '../common/consts';

export const media = (key: TypeSizes, css: string) => {
  const mediaWrapper = (size: number) => `@media screen and (min-width: ${size}px) {
    ${css}
  }`;

  switch (key) {
    case SIZES.SM:
      return mediaWrapper(MOBILE);
    case SIZES.MD:
      return mediaWrapper(TABLET);
    case SIZES.LG:
      return mediaWrapper(DESKTOP);
    default:
      throw new Error('Wrong media key');
  }
};

export const adaptBoxCss = `
  margin-left: auto;
  margin-right: auto;

  ${media(
    SIZES.SM,
    `
    width: ${MOBILE}px;
    padding-left: 10px;
    padding-right: 10px;
  `
  )}
  ${media(
    SIZES.MD,
    `
    width: ${TABLET}px;
    padding-left: 15px;
    padding-right: 15px
  `
  )}
  ${media(
    SIZES.LG,
    `
     width: ${DESKTOP}px;
    padding-left: 20px;
    padding-right: 20px;
  `
  )}
`;
