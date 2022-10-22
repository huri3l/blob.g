import { Center, Flex, Heading, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Banner } from '@components/commons/Banner';
import { Footer } from '@components/commons/Footer';
import { Header } from '@components/commons/Header';
import { Content } from '@/components/prismic/Content';
import { getPost } from '@helpers/prismic/normalizers/posts';
import { formatDate } from '@helpers/prismic/utils';
import { PostSkeleton } from './PostSkeleton';
import { Fallback } from '@/components/commons/Fallback';

const Posts = () => {
  const { slug } = useParams();
  const { status, data } = getPost(slug);

  if (status === 'failed') {
    return <Navigate to="/404" />;
  } else if (status === 'no-data') {
    return <Fallback />;
  }

  const date = data?.publishDate ? formatDate(data.publishDate) : '';

  return (
    <div>
      <Header />
      <Fallback />
      {status === 'loading' ? (
        <PostSkeleton />
      ) : (
        <>
          {data?.banner?.url && <Banner image={data.banner} />}
          <Center as="main" mb="50px" py="50px" px={['50px', '50px', '100px', '200px', '350px']}>
            <Flex direction="column" gap="25px" justify="start" align="start" w="100%">
              <Heading fontSize={['md', '2xl', '2xl', '2xl']}>{data?.title}</Heading>
              {date && <Text variant="subtitle">{date}</Text>}

              <Content content={data?.content} />
            </Flex>
          </Center>
          <Footer />
        </>
      )}
    </div>
  );
};

export default memo(Posts);
