import { Center } from '@chakra-ui/react';
import { CardType, Card } from '@components/card/Card';
import { Slider, Slide, SliderProps } from '@components/commons/Slider';

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
    navigation: cards.length >= 3,
    pagination: cards.length >= 3 && {
      clickable: true,
    },
    draggable: cards.length >= 3,
    loop: cards.length >= 3,
    breakpoints: {
      300: {
        slidesPerView: 1,
        navigation: false,
        slidesPerGroup: 1,
      },
      800: {
        slidesPerView: cards.length < 2 ? cards.length : 2,
        slidesPerGroup: cards.length < 2 ? cards.length : 2,
      },
      1200: {
        slidesPerView: cards.length < 3 ? cards.length : 3,
        slidesPerGroup: cards.length < 3 ? cards.length : 3,
      },
    },
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
