import React from 'react';
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

export interface TextBoxProps {
  onPress?: () => void;
}

const TextBox: React.FC<TextBoxProps> = ({ children, onPress = undefined }) => (
  <Pressable onPress={onPress}>
    <Box>
      <DaText>{children}</DaText>
    </Box>
  </Pressable>
);

export default TextBox;
