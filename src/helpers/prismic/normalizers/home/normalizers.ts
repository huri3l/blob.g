import { HORIZONTAL_CARD, REGULAR_CARD } from './constants';
import { prismicCardContainerType, prismicHomeType } from './types/home';

export const normalizeHomeData = (data?: prismicHomeType) => {
  if (!data) return null;

  return {
    title: data.title?.[0]?.text,
    description: data.description?.[0]?.text,
    cardsContainer: normalizeContainerData(data.body),
  };
};

const normalizeContainerData = (containers?: prismicCardContainerType[]) => {
  if (!containers) return null;

  return containers.map((container) => {
    const { slice_type: type } = container;

    let normalizedContainer = {};

    if (type == REGULAR_CARD) {
      normalizedContainer = {
        type,
        title: container?.primary?.card_container_title?.[0]?.text,
        description: container?.primary?.card_container_description?.[0]?.text,
        showAsCarousel: container?.primary?.card_container_is_carousel,
        cards: normalizeCard(container),
      };
    } else if (type == HORIZONTAL_CARD) {
      normalizedContainer = {
        type,
        title: container?.primary?.horizontal_card_container_title?.[0]?.text,
        description: container?.primary?.horizontal_card_container_description?.[0]?.text,
        horizontal_cards: normalizeCard(container),
      };
    }

    return normalizedContainer;
  });
};

const normalizeCard = (container?: prismicCardContainerType) => {
  if (!container) return null;

  const { slice_type: type, items: cards } = container;

  if (type === REGULAR_CARD) {
    return cards?.map((card) => ({
      publishDate: card?.card_publish_date,
      title: card?.card_title?.[0]?.text ?? '',
      content: card?.card_content?.[0]?.text ?? '',
      link: card?.card_link ?? '',
      image: {
        url: card?.card_image?.recommended?.url ?? card?.card_image?.url ?? '',
        alt: card?.card_image?.recommended?.alt ?? card?.card_image?.alt ?? '',
      },
    }));
  } else if (type === HORIZONTAL_CARD) {
    return cards?.map((card) => ({
      publishDate: card?.horizontal_card_publish_date ?? '',
      title: card?.horizontal_card_title?.[0]?.text ?? '',
      content: card?.horizontal_card_description?.[0]?.text ?? '',
      link: card?.horizontal_card_link ?? '',
      image: {
        url:
          card?.horizontal_card_image?.recommended?.url ?? card?.horizontal_card_image?.url ?? '',
        alt:
          card?.horizontal_card_image?.recommended?.alt ?? card?.horizontal_card_image?.alt ?? '',
      },
    }));
  }
};
