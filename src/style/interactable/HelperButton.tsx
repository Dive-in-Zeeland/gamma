import React from 'react';
import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Container = styled.View`
  position: absolute;
  z-index: 9;
  elevation: 9;
  border-radius: 360px;
  top: 6%;
  left: 15%;
`;

export interface HelperButtonProps {
  onPress: () => void;
}

const HelperButton: React.FC<HelperButtonProps> = ({ onPress }) => (
  <Container>
    <Ionicons name="alert-circle" size={50} color="white" onPress={onPress} />
  </Container>
);

export default HelperButton;
