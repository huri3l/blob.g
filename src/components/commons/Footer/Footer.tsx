import { Flex, Link, Text } from '@chakra-ui/react';
import { memo } from 'react';

const Footer = () => {
  return (
    <Flex
      p="20px"
      width="100%"
      position="fixed"
      bottom="0"
      direction={['column', 'row']}
      justify={['center', 'space-between']}
      zIndex="10"
      backgroundColor="white"
    >
      <Text textAlign="center">Desenvolvido com 💖 por Huriel</Text>
      <Link
        href="https://www.youtube.com/huriel"
        textAlign="center"
        textColor="blue.600"
        target="_blank"
      >
        Canal
      </Link>
    </Flex>
  );
};

export default memo(Footer);
