import { CardContainerType } from '@helpers/prismic/normalizers/home/types/normalized';
import { CardType } from '@components/card/Card';
import { HorizontalCardType } from '@components/card/HorizontalCard';

export interface CardContainerProps {
  data?: CardContainerType[];
}

export interface CardCarouselWrapperProps {
  cardContainer: CardContainerType;
}

export interface CardWrapperProps {
  card: CardType;
}

export interface HorizontalCardWrapperProps {
  card: HorizontalCardType;
}
