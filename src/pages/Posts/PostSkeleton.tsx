import { memo } from 'react';
import { Center, Flex, Skeleton, SkeletonText } from '@chakra-ui/react';

const PostSkeletonComponent = () => {
  return (
    <div>
      <Skeleton w="100%" h={['200px', '300px']} />
      <Center as="main" mb="50px" py="50px" px={['50px', '50px', '100px', '200px', '350px']}>
        <Flex direction="column" gap="25px" justify="start" align="start" w="100%">
          <SkeletonText skeletonHeight={12} w="90%" noOfLines={1} spacing="4" />
          <SkeletonText skeletonHeight={6} w="16%" noOfLines={1} spacing="4" />
          <SkeletonText mt="4" w="100%" noOfLines={10} spacing="4" />
        </Flex>
      </Center>
    </div>
  );
};

export const PostSkeleton = memo(PostSkeletonComponent);
