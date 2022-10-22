import { usePrismicDocumentByUID } from '@prismicio/react';
import { normalizePostData } from './normalizer';
import { prismicPostType } from './types/posts';

export const getPost = (slug?: string) => {
  if (!slug) {
    return {
      status: 'failed',
      data: null,
    };
  }

  const [document, { state, error }] = usePrismicDocumentByUID('blog_post', slug);

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

  const data: prismicPostType = document?.data;

  return {
    status: 'ok',
    data: normalizePostData(data),
  };
};
