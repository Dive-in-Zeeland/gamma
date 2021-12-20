import React from 'react';
import { ContentBox } from 'style/boxes/ContentBox';
import styled from 'styled-components/native';

const Teal = styled.View`
  background-color: teal;
  flex: 1;
`;

const Body: React.FC<{}> = ({ children }) => (
  <Teal>
    <ContentBox>{children}</ContentBox>
  </Teal>
);

export default Body;
