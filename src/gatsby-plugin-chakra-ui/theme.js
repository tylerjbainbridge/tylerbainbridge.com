import { theme as defaultTheme } from '@chakra-ui/core';

// #4030ff

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    brand1: '#4030ff',
    brand2: '#f0f',
  },
  fonts: {
    body: 'Savate Regular',
    // body: 'Lack Regular',
    // body: 'Steps Mono',
    body: 'Karrik Regular',
    // body: 'Minipax Regular',
    // special: 'Mayenne Sans Regular',
    special: 'Tiny180',
    special: 'Pilowlava',
    special: 'Le Murmure Regular',
    special: 'Kaerukaeru Regular',
  },
};

export default theme;
