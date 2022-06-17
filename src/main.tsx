import { ChakraProvider } from '@chakra-ui/react';
import { PrismicProvider } from '@prismicio/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { client } from './services/prismic';
import theme from './styles/theme';

const container = document.getElementById('root');

const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <PrismicProvider client={client}>
        <App />
      </PrismicProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
