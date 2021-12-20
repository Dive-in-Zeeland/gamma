import React from 'react';
import { ContentBox } from 'style/boxes/ContentBox';

const Body: React.FC<{}> = ({ children }) => (
  <ContentBox>{children}</ContentBox>
);

export default Body;
