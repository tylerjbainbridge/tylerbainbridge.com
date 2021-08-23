import { extendTheme } from '@chakra-ui/react';

// #4030ff

const theme = extendTheme({
  styles: {
    global: {
      colors: {
        brand1: '#4030ff',
        brand2: '#f0f',
        brand3: '#0047ab', // cobalt
      },
      fonts: {
        body: 'Savate Regular',
        // body: 'Lack Regular',
        // body: 'Steps Mono',
        body: 'Karrik Regular',
        // body: 'Minipax Regular',
        // body: 'Goudy Old Style Regular',
        // body: "Times New Roman",
        bodyItalic: 'Goudy Old Style Italic',
        // special: 'Mayenne Sans Regular',
        special: 'Steps Mono',
        // special: 'Savate Regular',
        // special: 'Tiny180',
        // special: 'Pilowlava',
        // special: 'Le Murmure Regular',
        // special: 'Kaerukaeru Regular',
      },
      body: {
        fontFamily: 'Times New Roman',
        bg: 'gray.400',
        color: 'purple',
      },
    },
  },
});

export default theme;
