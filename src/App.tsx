import { Center } from '@chakra-ui/react';
import { Header } from './components/commons/Header/index';
import { VerticalCard } from './components/card/VerticalCard';

import { vertical_cards } from './components-mock.json';

function App() {
  return (
    <div>
      <Header />
      <Center>
        {vertical_cards.map((vertical_card) => (
          <VerticalCard key={vertical_card.title} card={vertical_card} />
        ))}
      </Center>
    </div>
  );
}

export default App;
