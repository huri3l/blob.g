import { memo } from 'react';
import { CardContainer } from '@components/card/CardContainer';
import { Footer } from '@components/commons/Footer';
import { Header } from '@components/commons/Header';
import { HomeDisplay } from '@components/home/HomeDisplay';
import { Fallback } from '@components/commons/Fallback';
import { getHome } from '@helpers/prismic/normalizers/home';
import { HomeSkeleton } from './HomeSkeleton';

const Home = () => {
  const { status, data } = getHome();

  if (status === 'no-data') {
    return <Fallback />;
  }

  return (
    <>
      <Header />
      {status === 'loading' ? (
        <HomeSkeleton />
      ) : (
        <>
          <HomeDisplay title={data?.title} description={data?.description} />
          {data?.cardsContainer && <CardContainer data={data.cardsContainer} />}
        </>
      )}
      <Footer />
    </>
  );
};

export default memo(Home);
