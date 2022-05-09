import { ChakraProvider } from '@chakra-ui/react';
import { PrismicProvider } from '@prismicio/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { client } from './services/prismic';
import theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <PrismicProvider client={client}>
        <App />
      </PrismicProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
