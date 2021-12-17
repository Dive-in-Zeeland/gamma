import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

// Prev: Home or Container
export const WhiteCard = styled.View`
  flex: 1;
  margin: 10px;
  background-color: white;
  border-radius: 15px;
`;

// Prev: Main
export const TealBox = styled(View)`
  flex: 1;
  background-color: teal;
`;

const Body = ({ children }) => (
  <TealBox>
    <WhiteCard>{children}</WhiteCard>
  </TealBox>
);

export default Body;
