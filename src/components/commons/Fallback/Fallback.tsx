import { memo } from 'react';
import { Footer } from '@components/commons/Footer';
import { Header } from '@components/commons/Header';
import { Center, VStack, Heading, Text } from '@chakra-ui/react';

const Fallback = () => {
  return (
    <>
      <Header />
      <Center mt="100px">
        <VStack gap="10px">
          <Heading>Houve um problema ao carregar essa página...</Heading>
          <Text>Tente novamente atualizando a página.</Text>
        </VStack>
      </Center>
      <Footer />
    </>
  );
};

export default memo(Fallback);
