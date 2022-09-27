import { CardType } from '@components/card/Card';
import { HorizontalCardType } from '@components/card/HorizontalCard';

export interface CardContainerType {
  type?: string;
  title?: string;
  description?: string;
  showAsCarousel?: boolean;
  cards?: CardType[];
  horizontal_cards?: HorizontalCardType[];
}
