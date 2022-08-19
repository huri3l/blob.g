import { useSinglePrismicDocument } from '@prismicio/react';
import { normalizeHomeData } from './normalizers';
import { prismicHomeType } from './types/home';

export const getHome = () => {
  const [document] = useSinglePrismicDocument('home');

  if (!document?.data) return null;

  const data: prismicHomeType = document?.data;

  return normalizeHomeData(data);
};
