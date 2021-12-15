import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Pressable = styled.Pressable`
  margin-bottom: 10px;
`;

// prev: Icon1
const Box = styled.View`
  background-color: teal;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  height: 60px;
`;

const DaText = styled.Text`
  font-size: 30px;
  color: white;
`;

const TextBox = ({ children, onPress }) => (
  <Pressable onPress={onPress}>
    <Box>
      <DaText>{children}</DaText>
    </Box>
  </Pressable>
);

export default TextBox;
