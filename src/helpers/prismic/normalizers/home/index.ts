import { useSinglePrismicDocument } from '@prismicio/react';
import { normalizeHomeData } from './normalizers';
import { prismicHomeType } from './types/home';

export const getHome = () => {
  const [document, { state, error }] = useSinglePrismicDocument('home');

  if (error) {
    return {
      status: 'failed',
      data: null,
    };
  } else if (state === 'failed') {
    return {
      status: 'failed',
      data: null,
    };
  }

  if (state !== 'loaded') {
    return {
      status: 'loading',
      data: null,
    };
  }

  if (!document?.data) {
    return {
      status: 'no-data',
      data: null,
    };
  }

  const data: prismicHomeType = document?.data;

  return {
    status: 'ok',
    data: normalizeHomeData(data),
  };
};
