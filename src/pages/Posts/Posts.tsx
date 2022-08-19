import { Center, Flex, Heading, Text } from '@chakra-ui/react';
import { PrismicRichText } from '@prismicio/react';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Banner } from '../../components/commons/Banner';
import { Footer } from '../../components/commons/Footer';
import { Header } from '../../components/commons/Header';
import { getPost } from '../../helpers/prismic/normalizers/posts';

const Posts = () => {
  const { slug } = useParams();
  const data = getPost(slug);

  // [] TODO: Redirecionar para 404
  if (!data) return null;

  return (
    <div>
      <Header />
      {data?.banner?.url && <Banner image={data.banner} />}
      <Center as="main" mb="50px" py="50px" px="200px">
        <Flex direction="column" gap="25px">
          <Heading fontSize={['md', '2xl', '2xl', '2xl']}>{data?.title}</Heading>
          {data?.publishDate && <Text variant="subtitle">{data?.publishDate}</Text>}

          <div>
            <PrismicRichText field={data?.content} />
          </div>
        </Flex>
      </Center>
      <Footer />
    </div>
  );
};

export default memo(Posts);
