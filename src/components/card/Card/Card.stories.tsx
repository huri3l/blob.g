import { Card } from './Card';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Card',
  components: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Complete = Template.bind({});
Complete.args = {
  card: {
    title: 'Card Completo',
    content:
      'Card como componente. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dictum mi, euismod congue mi. Nunc porttitor accumsan ante nec accumsan. Sed a tellus nec urna pellentesque lacinia nec nec ex. Phasellus pharetra ac quam mattis dignissim. Nam a feugiat dolor. Maecenas vulputate urna ac augue tempor, imperdiet sollicitudin nisi tincidunt. Donec in risus et felis tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dictum mi, euismod congue mi. Nunc porttitor accumsan ante nec accumsan. Sed a tellus nec urna pellentesque lacinia nec nec ex. Phasellus pharetra ac quam mattis dignissim. Nam a feugiat dolor. Maecenas vulputate urna ac augue tempor, imperdiet sollicitudin nisi tincidunt. Donec in risus et felis tempus',
    image: {
      url: 'https://images.unsplash.com/photo-1642516254185-81a8133cc6a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      alt: 'Imagem de Ondas',
    },
    publishDate: '05 de mar. 2022',
  },
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  card: {
    title: 'Card Sem Imagem',
    content:
      'Card como componente. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dictum mi, euismod congue mi. Nunc porttitor accumsan ante nec accumsan. Sed a tellus nec urna pellentesque lacinia nec nec ex. Phasellus pharetra ac quam mattis dignissim. Nam a feugiat dolor. Maecenas vulputate urna ac augue tempor, imperdiet sollicitudin nisi tincidunt. Donec in risus et felis tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dictum mi, euismod congue mi. Nunc porttitor accumsan ante nec accumsan. Sed a tellus nec urna pellentesque lacinia nec nec ex. Phasellus pharetra ac quam mattis dignissim. Nam a feugiat dolor. Maecenas vulputate urna ac augue tempor, imperdiet sollicitudin nisi tincidunt. Donec in risus et felis tempus',
    publishDate: '05 de mar. 2022',
  },
};

export const WithoutPublishDate = Template.bind({});
WithoutPublishDate.args = {
  card: {
    title: 'Card Sem Data de Publicação',
    content:
      'Card como componente. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dictum mi, euismod congue mi. Nunc porttitor accumsan ante nec accumsan. Sed a tellus nec urna pellentesque lacinia nec nec ex. Phasellus pharetra ac quam mattis dignissim. Nam a feugiat dolor. Maecenas vulputate urna ac augue tempor, imperdiet sollicitudin nisi tincidunt. Donec in risus et felis tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dictum mi, euismod congue mi. Nunc porttitor accumsan ante nec accumsan. Sed a tellus nec urna pellentesque lacinia nec nec ex. Phasellus pharetra ac quam mattis dignissim. Nam a feugiat dolor. Maecenas vulputate urna ac augue tempor, imperdiet sollicitudin nisi tincidunt. Donec in risus et felis tempus',
    image: {
      url: 'https://images.unsplash.com/photo-1642516254185-81a8133cc6a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      alt: 'Imagem de Ondas',
    },
  },
};

export const Minimum = Template.bind({});
Minimum.args = {
  card: {
    title: 'Card Mínimo',
    content:
      'Card como componente. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dictum mi, euismod congue mi. Nunc porttitor accumsan ante nec accumsan. Sed a tellus nec urna pellentesque lacinia nec nec ex. Phasellus pharetra ac quam mattis dignissim. Nam a feugiat dolor. Maecenas vulputate urna ac augue tempor, imperdiet sollicitudin nisi tincidunt. Donec in risus et felis tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dictum mi, euismod congue mi. Nunc porttitor accumsan ante nec accumsan. Sed a tellus nec urna pellentesque lacinia nec nec ex. Phasellus pharetra ac quam mattis dignissim. Nam a feugiat dolor. Maecenas vulputate urna ac augue tempor, imperdiet sollicitudin nisi tincidunt. Donec in risus et felis tempus',
  },
};
