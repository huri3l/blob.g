import { Box, Center, Heading, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { HORIZONTAL_CARD, REGULAR_CARD } from '../../../helpers/prismic/normalizers/home/constants';
import { CardSlider } from '../../carrousels/CardCarrousel';
import { Card } from '../Card/Card';
import { HorizontalCard } from '../HorizontalCard';
import {
  CardCarouselWrapperProps,
  CardContainerProps,
  CardWrapperProps,
  HorizontalCardWrapperProps,
} from './types';

const CardContainer = ({ data }: CardContainerProps) => {
  return (
    <section>
      {data?.map((cardContainer) => {
        if (!cardContainer?.cards && !cardContainer?.horizontal_cards) return null;

        return (
          <Box key={`${Math.random()} ${cardContainer?.title}`} m={2} mb={100}>
            <Heading textAlign="center" size="lg" mb="10px">
              {cardContainer?.title}
            </Heading>
            <Text textAlign="center" fontSize={['md', 'lg']}>
              {cardContainer?.description}
            </Text>

            {cardContainer?.showAsCarousel ? (
              <CardCarouselWrapper cardContainer={cardContainer} />
            ) : (
              <>
                {cardContainer?.type === REGULAR_CARD &&
                  cardContainer?.cards?.map((card) => <CardWrapper card={card} />)}

                {cardContainer?.type === HORIZONTAL_CARD &&
                  cardContainer?.horizontal_cards?.map((card) => (
                    <HorizontalCardWrapper card={card} />
                  ))}
              </>
            )}
          </Box>
        );
      })}
    </section>
  );
};

const CardCarouselWrapper = ({ cardContainer }: CardCarouselWrapperProps) => {
  if (!cardContainer || !cardContainer.cards) return null;

  return <CardSlider cards={cardContainer.cards} />;
};

const CardWrapper = ({ card }: CardWrapperProps) => {
  if (!card?.title || !card?.content) return null;

  return (
    <Box key={`${Math.random()} ${card.title}`} pt="32px">
      <Center>
        <Card card={card} />
      </Center>
    </Box>
  );
};

const HorizontalCardWrapper = ({ card }: HorizontalCardWrapperProps) => {
  if (!card?.title || !card?.content || !card?.image?.url || !card?.publishDate) return null;

  return (
    <Box key={`${Math.random()} ${card.title}`} pt="32px">
      <Center>
        <HorizontalCard card={card} />
      </Center>
    </Box>
  );
};

export default memo(CardContainer);
