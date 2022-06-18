import { memo } from 'react';
import { Footer } from '../../components/commons/Footer';
import { Header } from '../../components/commons/Header';
import { HomeDisplay } from '../../components/home/HomeDisplay';
import { handleDocument } from '../../helpers/prismic/home';

const Home = () => {
  const homeData = handleDocument();

  return (
    <>
      <Header />
      <HomeDisplay title={homeData?.title} description={homeData?.description} />
      <Footer />
    </>
  );
};

export default memo(Home);
