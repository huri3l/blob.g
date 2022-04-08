import { memo } from 'react';
import { Flex, Heading, Image, Text } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex p="5" align="center" gap="3">
      <Image src="icon.svg" color="gray.500" alt="Ícone blob.g" />
      <Flex direction="column">
        <Heading>blob.g</Heading>
        <Text>Notícias do mundo dos códigos</Text>
      </Flex>
    </Flex>
  );
}

export default memo(Header);
