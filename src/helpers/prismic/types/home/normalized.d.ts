import { CardType } from '../../../../components/card/Card';

export interface CardContainerType {
  type?: string;
  title?: string;
  description?: string;
  showAsCarousel?: boolean;
  cards?: CardType[];
}
