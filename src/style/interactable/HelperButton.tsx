import React from 'react';
import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import theme from 'constants/theme';

const Container = styled.View`
  position: absolute;
  z-index: 9;
  elevation: 9;
  border-radius: 360px;
  top: 7%;
  left: 9%;
`;

export interface HelperButtonProps {
  onPress: () => void;
}

const HelperButton: React.FC<HelperButtonProps> = ({ onPress }) => (
  <Container>
    <Ionicons
      name="help-circle"
      size={40}
      color={theme.colors.main}
      onPress={onPress}
    />
  </Container>
);

export default HelperButton;
