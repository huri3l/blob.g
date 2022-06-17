export interface prismicText {
  type: string;
  text: string;
}

export interface prismicBaseImage {
  alt?: string;
  dimensions?: {
    width: number;
    height: number;
  };
  url: string;
}

export interface prismicImage extends prismicBaseImage {
  recommended?: prismicBaseImage;
}
