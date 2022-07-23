import { Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { customScrollbar } from '../../../styles/styles';
import { HorizontalCardType } from './types';

interface HorizontalCardProps {
  card: HorizontalCardType;
}

export function HorizontalCard({ card }: HorizontalCardProps) {
  const { image, title, content, publishDate } = card;

  return (
    <Flex maxW="850px" maxH="400px" borderRadius="8px" bgColor="gray.100">
      <Image
        src={image.url}
        alt={image.alt}
        maxW={['200px', '300px', '400px']}
        maxH={['200px', '300px', '400px']}
        objectFit="cover"
        borderLeftRadius="8px"
      />
      <VStack
        p="16px"
        spacing="16px"
        align="flex-start"
        maxW="350px"
        minW="200px"
        h={['200px', '300px', '400px']}
      >
        <Text variant="subtitle">{publishDate}</Text>
        <Heading size="lg">{title}</Heading>
        <Text overflowY="auto" css={customScrollbar}>
          {content}
        </Text>
      </VStack>
    </Flex>
  );
}
