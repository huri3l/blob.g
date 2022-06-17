import { memo } from 'react';
import { handleDocument } from '../../helpers/prismic/home';

const Home = () => {
  const homeData = handleDocument();

  console.log(homeData);

  return (
    <div>
      <h1>teste</h1>
    </div>
  );
};

export default memo(Home);
