import { memo } from 'react';
import { CardContainer } from '@components/card/CardContainer';
import { Footer } from '@components/commons/Footer';
import { Header } from '@components/commons/Header';
import { HomeDisplay } from '@components/home/HomeDisplay';
import { getHome } from '@helpers/prismic/normalizers/home';

const Home = () => {
  const data = getHome();

  return (
    <>
      <Header />
      <HomeDisplay title={data?.title} description={data?.description} />
      {data?.cardsContainer && <CardContainer data={data.cardsContainer} />}
      <Footer />
    </>
  );
};

export default memo(Home);
