import React from 'react';
import { Text } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import styled from 'styled-components';
import Body from 'src/components/Body';
import BorderCard from 'src/components/BorderCard';

const BorderCardStyled = styled(BorderCard)`
  flex: 0.5;
`;

const TextM20 = styled(Text)`
  margin: 20px;
`;

const MapHelpScreen = ({ navigation: nav }) => (
  <Body>
    <BorderCardStyled>
      <Ionicons
        name="arrow-back"
        size={40}
        color="teal"
        onPress={nav.goBack}
      />
      <TextM20>QR HELPER</TextM20>
    </BorderCardStyled>
  </Body>
);

export default MapHelpScreen;
