import { Heading, Text, VStack } from '@chakra-ui/react';
import { memo } from 'react';

interface HomeDisplayProps {
  title?: string;
  description?: string;
}

const HomeDisplay = ({ title, description }: HomeDisplayProps) => {
  if (!title || !description) return null;

  return (
    <VStack>
      <Heading>{title}</Heading>
      <Text>{description}</Text>
    </VStack>
  );
};

export default memo(HomeDisplay);
