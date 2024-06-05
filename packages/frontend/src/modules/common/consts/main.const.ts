export const MOBILE = 320;
export const TABLET = 425;
export const DESKTOP = 768;

export type TypeSizes = 'sm' | 'md' | 'lg';
interface ISizes {
  SM: TypeSizes;
  MD: TypeSizes;
  LG: TypeSizes;
}
export const SIZES: ISizes = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg'
};

export const bages = ['All', 'Private', 'Public', 'Completed'] as const;
export type TypeBages = (typeof bages)[number];
