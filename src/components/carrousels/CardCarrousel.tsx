import { Center } from '@chakra-ui/react';
import { CardType, Card } from '../card/Card';
import { Slider, Slide, SliderProps } from '../commons/Slider';

interface CardSliderProps {
  cards: CardType[];
}

export function CardSlider({ cards }: CardSliderProps) {
  if (cards.length === 1) {
    return (
      <Center>
        <Card card={cards[0]} />
      </Center>
    );
  }

  const settings: SliderProps = {
    spaceBetween: 50,
    slidesPerView: cards.length < 3 ? cards.length : 3,
    navigation: cards.length >= 3,
    pagination: cards.length >= 3 && {
      clickable: true,
    },
    draggable: cards.length >= 3,
    loop: cards.length >= 3,
  };

  return (
    <Slider settings={settings}>
      {cards.map((card) => (
        <Slide key={card.title}>
          <Card card={card} />
        </Slide>
      ))}
    </Slider>
  );
}
