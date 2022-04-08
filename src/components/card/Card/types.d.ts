export interface CardType {
  title: string;
  content: string;
  image?: {
    url: string;
    alt: string;
  };
  publishDate?: string;
}
