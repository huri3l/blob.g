import { prismicPostType } from './types/posts';

export const normalizePostData = (data: prismicPostType) => {
  return {
    title: data?.title?.[0]?.text,
    publishDate: data?.blog_post_date,
    content: data?.content,
    banner: {
      url: data?.banner?.recommended?.url ?? data?.banner?.url,
      alt: data?.banner?.recommended?.alt ?? data?.banner?.alt,
    },
  };
};
