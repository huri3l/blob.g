import { ListItem, ListItemProps, OrderedList, UnorderedList } from '@chakra-ui/react';
import { onlyText as getChildText } from 'react-children-utilities';
import React, { memo } from 'react';
import { ListProps } from '../types';

const List = ({ isOrdered, children }: ListProps) => {
  if (isOrdered) {
    return (
      <OrderedList>
        <ListContent ml={3}>{children}</ListContent>
      </OrderedList>
    );
  } else {
    return (
      <UnorderedList>
        <ListContent ml={3}>{children}</ListContent>
      </UnorderedList>
    );
  }
};

const ListContent = ({ children, ...props }: ListItemProps) => {
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return <ListItem {...props}>{getChildText(child)}</ListItem>;
        }
      })}
    </>
  );
};

export default memo(List);
