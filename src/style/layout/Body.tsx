import React from 'react';
import { ContentBox } from 'components/ContentBox';

const Body: React.FC<{}> = ({ children }) => (
  <ContentBox>{children}</ContentBox>
);

export default Body;
