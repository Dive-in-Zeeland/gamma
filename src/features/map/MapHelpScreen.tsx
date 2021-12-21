import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import Body from 'style/layout/Body';
import BorderCard from 'style/boxes/BorderCard';
import { TextM20 } from 'style/typo/Text';
import styled from 'styled-components/native';
import { Routes } from 'constants/navigation';
import { MapNavigatorProp } from 'nav/MapNavigator';
import { useNavigation } from '@react-navigation/core';

const BorderCardStyled = styled(BorderCard)`
  flex: 0.5;
`;

function MapHelpScreen() {
  const navigation = useNavigation<MapNavigatorProp<Routes.MapHelp>>();
  return (
    <Body>
      <BorderCardStyled>
        <Ionicons
          name="arrow-back"
          size={40}
          color="teal"
          onPress={() => navigation.goBack()}
        />
        <TextM20>MAP HELPER</TextM20>
      </BorderCardStyled>
    </Body>
  );
}

export default MapHelpScreen;
