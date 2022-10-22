import { PrismicRichText } from '@prismicio/react';
import Heading from './components/Heading';
import HyperLink from './components/HyperLink';
import List from './components/List';
import { ContentProps, HyperLinkData } from './types';

export const Content = ({ content }: ContentProps) => {
  return (
    <div>
      <PrismicRichText
        field={content}
        components={{
          heading4: ({ children }) => <Heading size="2xl">{children}</Heading>,
          heading5: ({ children }) => <Heading size="xl">{children}</Heading>,
          heading6: ({ children }) => <Heading size="large">{children}</Heading>,
          hyperlink: ({ children, node }) => (
            <HyperLink data={node.data as HyperLinkData}>{children}</HyperLink>
          ),
          list: ({ children }) => <List isOrdered={false}>{children}</List>,
          oList: ({ children }) => <List isOrdered={true}>{children}</List>,
        }}
      />
    </div>
  );
};
