import { Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { customScrollbar } from '../../../styles/styles';
import { CardType } from './types.d';

interface CardProps {
  card: CardType;
}

export function Card({ card }: CardProps) {
  const { title, content, image, publishDate } = card;

  return (
    <Flex direction="column" maxW="450px" maxH="500px" borderRadius="8px" bgColor="gray.100">
      {image?.url && (
        <Image
          src={image.url}
          alt={image.alt}
          w="100%"
          maxW="450px"
          h="100%"
          maxH="220px"
          objectFit="cover"
          borderTopRadius="8px"
        />
      )}
      <VStack
        p="16px"
        spacing="16px"
        align="flex-start"
        maxW="450px"
        minW="200px"
        h="100%"
        w="100%"
        overflow="auto"
      >
        {publishDate && <Text variant="subtitle">{publishDate}</Text>}
        <Heading fontSize={['md', '2xl', '2xl', '2xl']}>{title}</Heading>
        <Text overflowY="auto" css={customScrollbar}>
          {content}
        </Text>
      </VStack>
    </Flex>
  );
}
