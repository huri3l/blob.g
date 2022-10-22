import { Link } from '@chakra-ui/react';
import { memo } from 'react';
import { HyperLinkProps } from '../types';

const HyperLink = ({ children, data }: HyperLinkProps) => {
  const isExternal = data.target === '_blank' ? true : false;

  return (
    <Link isExternal={isExternal} href={data.url} color="blue.500">
      {children}
    </Link>
  );
};

export default memo(HyperLink);
