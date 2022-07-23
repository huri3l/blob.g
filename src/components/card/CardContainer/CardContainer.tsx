import { Center, Heading, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { HORIZONTAL_CARD, REGULAR_CARD } from '../../../helpers/prismic/normalizers/home/constants';
import { CardContainerType } from '../../../helpers/prismic/normalizers/home/types/normalized';
import { CardSlider } from '../../carrousels/CardCarrousel';
import { Card } from '../Card/Card';
import { HorizontalCard } from '../HorizontalCard';

interface CardContainerProps {
  data?: CardContainerType[];
}

const CardContainer = ({ data }: CardContainerProps) => {
  return (
    <section>
      {data?.map((cardContainer) => {
        if (!cardContainer?.cards && !cardContainer?.horizontal_cards) return null;

        if (cardContainer?.showAsCarousel && cardContainer?.cards) {
          return (
            <div key={`${Math.random()} ${cardContainer?.title}`} style={{ marginBottom: 60 }}>
              <Heading textAlign="center" size="lg" mb="10px">
                {cardContainer?.title}
              </Heading>
              <Text textAlign="center" fontSize="md">
                {cardContainer?.description}
              </Text>
              <CardSlider cards={cardContainer.cards} />
            </div>
          );
        }

        return (
          <div style={{ marginBottom: 60 }} key={`${Math.random()} ${cardContainer?.title}`}>
            <Heading textAlign="center" size="lg" mb="10px">
              {cardContainer?.title}
            </Heading>
            <Text textAlign="center" fontSize="md">
              {cardContainer?.description}
            </Text>
            {cardContainer?.type === REGULAR_CARD &&
              cardContainer?.cards?.map((card) => {
                if (!card?.title || !card?.content) return null;

                return (
                  <div key={`${Math.random()} ${card.title}`} style={{ marginBottom: 60 }}>
                    <Center>
                      <Card card={card} />
                    </Center>
                  </div>
                );
              })}

            {cardContainer?.type === HORIZONTAL_CARD &&
              cardContainer?.horizontal_cards?.map((card) => {
                console.log(card);
                if (!card?.title || !card?.content) return null;
                console.log('chegou aqui');

                return (
                  <div key={`${Math.random()} ${card.title}`} style={{ marginBottom: 60 }}>
                    <Center>
                      <HorizontalCard card={card} />
                    </Center>
                  </div>
                );
              })}
          </div>
        );
      })}
    </section>
  );
};

export default memo(CardContainer);
