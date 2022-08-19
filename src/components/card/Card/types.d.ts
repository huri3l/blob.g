export interface CardType {
  title: string;
  content: string;
  link: string;
  image?: {
    url: string;
    alt: string;
  };
  publishDate?: string;
}
