import { Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { formatDate } from '@helpers/prismic/utils';
import { customScrollbar } from '@/styles/utils';
import { HorizontalCardType } from './types';

interface HorizontalCardProps {
  card: HorizontalCardType;
}

export function HorizontalCard({ card }: HorizontalCardProps) {
  const { image, title, content, publishDate, link } = card;

  const date = formatDate(publishDate);

  return (
    <a href={`posts/${link}`}>
      <Flex
        maxW="850px"
        maxH="400px"
        borderRadius="8px"
        bgColor="gray.100"
        direction={['column', 'row']}
      >
        <Image
          src={image.url}
          alt={image.alt}
          maxW={['100px', '250px', '300px', '300px', '300px']}
          maxH={['100px', '250px', '300px', '300px', '300px']}
          objectFit="cover"
          borderLeftRadius="8px"
          alignSelf="center"
          justifySelf="center"
          p={['5px', '0px']}
        />
        <VStack
          p="16px"
          spacing={['5px', '16px']}
          align="flex-start"
          maxW="350px"
          h={['200px', '300px', '300px']}
        >
          <Text variant="subtitle">{date}</Text>
          <Heading fontSize={['md', '2xl', '2xl', '2xl']}>{title}</Heading>
          <Text overflowY="auto" css={customScrollbar}>
            {content}
          </Text>
        </VStack>
      </Flex>
    </a>
  );
}
