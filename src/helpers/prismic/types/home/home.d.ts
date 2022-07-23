import { prismicImage, prismicText } from './general';

export interface prismicCard {
  card_title?: prismicText[];
  card_content?: prismicText[];
  card_publish_date?: string;
  card_image?: prismicImage;
}

export interface homeDocument {
  title?: prismicText[];
  description?: prismicText[];
  body?: [
    {
      slice_type?: string;
      primary?: {
        card_container_title?: prismicText[];
        card_container_description?: prismicText[];
        card_container_is_carousel?: boolean;
      };
      items?: prismicCard[];
    },
  ];
}
