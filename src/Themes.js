import { createStitches } from '@stitches/react';

export const { styled, css } = createStitches({
  theme: {
    colors: {
      white: '#fff',
      black: '#222222',
      gray: '#808080',
      red: '#ff354a',
    },
    space: {
      0: '0px',
      4: '4px',
      8: '8px',
      16: '16px',
      24: '24px',
      32: '32px',
      48: '48px',
      64: '64px',
      128: '128px',
      256: '256px',
      512: '512px',
    },
    fontSizes: {
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      24: '1.5rem',
      36: '2.25rem',
      48: '3rem',
      64: '4rem',
      80: '5rem',
      96: '6rem',
    },
    fonts: {
      poppins: 'Poppins',
      libreBaskerville: 'Libre Baskerville',
    },
    fontWeights: {
      100: '100',
      200: '200',
      300: '300',
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
      900: '900',
    },
    lineHeights: {
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      48: '3rem',
      64: '4rem',
      75: '4,6875rem',
      90: '5.625rem',
    },
    letterSpacings: {
      normal: 'normal',
    },
    sizes: {
      64: '4rem',
      48: '3rem',
      32: '2rem',
      18: '1.125rem',
      16: '1rem',
      14: '0.875rem',
      12: '0.75rem',
    },
    borderWidths: {},
    borderStyles: {},
    radii: {
      2: '2px',
      4: '4px',
      8: '8px',
      16: '16px',
      48: '48px',
    },
    zIndices: {
      front: 3,
      midle: 2,
      back: 1,
    },
  },
});
