import React from 'react';
import { View } from 'react-native';
import styled from "styled-components";
import Ionicons from "@expo/vector-icons/Ionicons";

const Container = styled(View)`
  position: absolute;
  z-index: 9;
  elevation: 9;
  border-radius: 360px;
  top: 7%;
  left: 9%;
`;

const HelperButton = ({ onPress }) => (
  <Container>
    <Ionicons
      name="help-circle"
      size={40}
      color="teal"
      onPress={onPress}
    />
  </Container>
);

export default HelperButton;