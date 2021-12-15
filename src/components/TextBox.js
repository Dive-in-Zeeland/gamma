import React from 'react';
import styled from 'styled-components/native';

const Pressable = styled.Pressable`
  margin: 15px 0;
`;

// prev: Icon1
const Box = styled.View`
  background-color: teal;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  padding: 20px;
  font-size: 30px;
  color: white;
`;

const TextBox = ({ children, onPress }) => (
  <Pressable onPress={onPress}>
    <Box>
      <Text>{children}</Text>
    </Box>
  </Pressable>
);

export default TextBox;
