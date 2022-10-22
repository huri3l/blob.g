import { Center, Flex, Heading, Text } from '@chakra-ui/react';
import { PrismicRichText } from '@prismicio/react';
import { memo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Banner } from '@components/commons/Banner';
import { Footer } from '@components/commons/Footer';
import { Header } from '@components/commons/Header';
import { Content } from '@/components/prismic/Content';
import { getPost } from '@helpers/prismic/normalizers/posts';
import { formatDate } from '@helpers/prismic/utils';

const Posts = () => {
  const { slug } = useParams();
  const data = getPost(slug);

  // if (!data) {
  //   return <Navigate to="/404" />;
  // }

  const date = data?.publishDate ? formatDate(data.publishDate) : '';

  return (
    <div>
      <Header />
      {data?.banner?.url && <Banner image={data.banner} />}
      <Center as="main" mb="50px" py="50px" px="200px">
        <Flex direction="column" gap="25px">
          <Heading fontSize={['md', '2xl', '2xl', '2xl']}>{data?.title}</Heading>
          {date && <Text variant="subtitle">{date}</Text>}

          <Content content={data?.content} />
        </Flex>
      </Center>
      <Footer />
    </div>
  );
};

export default memo(Posts);
