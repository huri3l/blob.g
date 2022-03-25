import { extendTheme } from '@chakra-ui/react';

// * Include custom option in here, like colors, fonts...
const customTheme = {
  components: {
    Text: {
      variants: {
        subtitle: {
          color: 'gray.500',
          fontWeight: 'semibold',
          fontSize: '14px',
        },
      },
    },
  },
};

const theme = extendTheme(customTheme);

export default theme;
