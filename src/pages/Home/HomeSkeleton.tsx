import { Box, Skeleton, SkeletonText, VStack } from '@chakra-ui/react';
import { memo } from 'react';

const HomeSkeletonComponent = () => {
  return (
    <div>
      <VStack
        as="main"
        gap="40px"
        my="40px"
        mx="auto"
        px="32px"
        maxW={['400px', '400px', '400px', '800px']}
      >
        <VStack w="100%" gap="3px">
          <SkeletonText skeletonHeight={12} m="auto" w="90%" noOfLines={1} spacing="4" />
          <SkeletonText skeletonHeight={12} m="auto" w="70%" noOfLines={1} spacing="4" />
        </VStack>

        <VStack w="100%">
          <SkeletonText skeletonHeight={7} m="auto" w="90%" noOfLines={1} spacing="4" />
          <SkeletonText skeletonHeight={7} m="auto" w="30%" noOfLines={1} spacing="4" />
        </VStack>

        <VStack w="100%" gap="15px">
          <SkeletonText skeletonHeight={8} m="auto" w="15%" noOfLines={1} spacing="4" />
          <SkeletonText skeletonHeight={4} m="auto" w="100%" noOfLines={1} spacing="4" />
        </VStack>

        <Skeleton>
          <Box w="450px" h="500px"></Box>
        </Skeleton>
      </VStack>
    </div>
  );
};

export const HomeSkeleton = memo(HomeSkeletonComponent);
