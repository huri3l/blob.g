import { prismicImage, prismicText } from '@helpers/prismic/types/general';

export interface prismicCardType {
  // Regular
  card_title?: prismicText[];
  card_content?: prismicText[];
  card_publish_date?: string;
  card_image?: prismicImage;
  card_link?: string;

  // Horizontal
  horizontal_card_title?: prismicText[];
  horizontal_card_publish_date?: string;
  horizontal_card_description?: prismicText[];
  horizontal_card_image?: prismicImage;
  horizontal_card_link?: string;
}

export interface prismicCardContainerType {
  slice_type?: string;
  primary?: {
    // Regular
    card_container_title?: prismicText[];
    card_container_description?: prismicText[];
    card_container_is_carousel?: boolean;

    // Horizontal
    horizontal_card_container_title?: prismicText[];
    horizontal_card_container_description?: prismicText[];
  };
  items?: prismicCardType[];
}

export interface prismicHomeType {
  title?: prismicText[];
  description?: prismicText[];
  body?: prismicCardContainerType[];
}
