import { Heading, Text, VStack } from '@chakra-ui/react';
import { memo } from 'react';

interface HomeDisplayProps {
  title?: string;
  description?: string;
}

const HomeDisplay = ({ title, description }: HomeDisplayProps) => {
  if (!title || !description) return null;

  return (
    <VStack
      as="main"
      gap="40px"
      my="40px"
      mx="auto"
      px="32px"
      maxW={['400px', '400px', '400px', '800px']}
    >
      <Heading as="h1" size="2xl" textAlign="center">
        {title}
      </Heading>
      <Text textColor="gray.600" fontSize="2xl" textAlign="center">
        {description}
      </Text>
    </VStack>
  );
};

export default memo(HomeDisplay);
