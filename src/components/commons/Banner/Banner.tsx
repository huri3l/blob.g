import { Image } from '@chakra-ui/react';
import { memo } from 'react';

interface BannerProps {
  image: {
    alt?: string;
    url?: string;
  };
}

const Banner = ({ image }: BannerProps) => {
  if (!image?.url || !image?.alt) return null;

  return (
    <Image src={image.url} alt={image.alt} w="100%" h={['200px', '300px']} objectFit="cover" />
  );
};

export default memo(Banner);
