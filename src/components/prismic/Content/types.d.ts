import { ReactNode } from 'react';

export interface ContentProps {
  content: [] | undefined;
}

export interface GeneralProps {
  children: ReactNode;
}

export interface HeadingProps extends GeneralProps {
  size: string;
}

export interface HyperLinkProps extends GeneralProps {
  data: HyperLinkData;
}

export interface HyperLinkData {
  url: string;
  target: string;
  link_type: string;
}

export interface ListProps extends GeneralProps {
  isOrdered: boolean;
}
