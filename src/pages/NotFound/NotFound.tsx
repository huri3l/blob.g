import { Box, Button, Center, Heading, Text, VStack } from '@chakra-ui/react';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '@components/commons/Footer';
import { Header } from '@components/commons/Header';

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = useCallback(() => {
    navigate('/');
  }, []);

  return (
    <Box>
      <Header />
      <Center mt="100px">
        <VStack gap="10px">
          <Heading>Oops... Essa página não existe.</Heading>
          <Text>Retorne para Página Inicial no nosso site clicando no botão abaixo</Text>
          <Button onClick={goHome} bgColor="#FEB2B2" color="white">
            Clique aqui
          </Button>
        </VStack>
      </Center>
      <Footer />
    </Box>
  );
};

export default memo(NotFound);
