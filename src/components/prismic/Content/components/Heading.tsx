import { memo } from 'react';
import { Heading as ChakraHeading } from '@chakra-ui/react';
import { HeadingProps } from '../types';

const Heading = ({ children, size }: HeadingProps) => {
  return (
    <ChakraHeading fontSize={size} my="4">
      {children}
    </ChakraHeading>
  );
};

export default memo(Heading);
