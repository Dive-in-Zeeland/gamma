import React from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";

import Body from 'src/components/Body';
import BorderCard from 'src/components/BorderCard';
import { TextM20 } from 'src/components/Text';
import styled from 'styled-components';

const BorderCardStyled = styled(BorderCard)`
  flex: 0.5;
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
      <TextM20>MAP HELPER</TextM20>
    </BorderCardStyled>
  </Body>
);

export default MapHelpScreen;
