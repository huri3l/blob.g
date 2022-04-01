import { Center, VStack } from '@chakra-ui/react';
import { Header } from './components/commons/Header/index';
import { HorizontalCard } from './components/card/HorizontalCard';
import { Card } from './components/card/Card';

import { horizontal_cards, cards } from './components-mock.json';

function App() {
  return (
    <div>
      <Header />
      <Center>
        <VStack spacing="64px" marginY="64px">
          {horizontal_cards.map((horizontal_card) => (
            <HorizontalCard key={horizontal_card.title} card={horizontal_card} />
          ))}
          {cards.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </VStack>
      </Center>
    </div>
  );
}

export default App;
