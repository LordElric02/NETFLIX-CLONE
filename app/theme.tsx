'use client'; 

import { extendTheme } from '@chakra-ui/react';


const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'white',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
        letterSpacing: 'wider',
      },
    },
  },
  fonts: {
    heading: '"Montserrat", sans-serif',
    body: '"Open Sans", sans-serif',
  },
  colors: {
    brand: {
      50: '#f0e4ff',
      100: '#cbb2ff',
      200: '#a480ff',
      300: '#7a4dff',
      400: '#641bfe',
      500: '#5a01e5',
      600: '#5200b3',
      700: '#430082',
      800: '#2d0051',
      900: '#14001f',
    },
  },
})

export default theme

