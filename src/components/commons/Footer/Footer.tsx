import { Flex, Link, Text } from '@chakra-ui/react';
import { memo } from 'react';

const Footer = () => {
  return (
    <Flex
      p={['5px', '20px']}
      width="100%"
      position="fixed"
      bottom="0"
      direction="row"
      justify="center"
      zIndex="10"
      backgroundColor="white"
    >
      <Text textAlign="center">Desenvolvido com 💖 por&nbsp;</Text>
      <Link
        href="https://www.youtube.com/huriel"
        textAlign="center"
        textColor="blue.600"
        target="_blank"
      >
        Huriel
      </Link>
    </Flex>
  );
};

export default memo(Footer);
