import React from 'react';
import { Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styled from 'styled-components/native';
import Body from 'components/Body';
import BorderCard from 'components/BorderCard';
import { Routes } from 'constants/navigation';
import { ScanNavigatorProp } from 'navigation/ScanNavigator';
import { useNavigation } from '@react-navigation/core';

const BorderCardStyled = styled(BorderCard)`
  flex: 0.5;
`;

const TextM20 = styled(Text)`
  margin: 20px;
`;

export default function ScanHelpScreen() {
  const navigation = useNavigation<ScanNavigatorProp<Routes.ScanHelp>>();

  return (
    <Body>
      <BorderCardStyled>
        <Ionicons
          name="arrow-back"
          size={40}
          color="teal"
          onPress={() => navigation.goBack()}
        />
        <TextM20>QR HELPER</TextM20>
      </BorderCardStyled>
    </Body>
  );
}
