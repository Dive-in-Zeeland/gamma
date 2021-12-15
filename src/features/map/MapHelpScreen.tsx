import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import Body from 'components/Body';
import BorderCard from 'components/BorderCard';
import { TextM20 } from 'components/Text';
import styled from 'styled-components/native';

const BorderCardStyled = styled(BorderCard)`
  flex: 0.5;
`;

const MapHelpScreen = ({ navigation: nav }) => (
  <Body>
    <BorderCardStyled>
      <Ionicons name="arrow-back" size={40} color="teal" onPress={nav.goBack} />
      <TextM20>MAP HELPER</TextM20>
    </BorderCardStyled>
  </Body>
);

export default MapHelpScreen;
