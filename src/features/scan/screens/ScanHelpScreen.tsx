import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import styled from 'styled-components/native';
import BasicScreen from 'style/layout/BasicScreen';
import BorderCard from 'style/boxes/BorderCard';
import { Routes } from 'constants/navigation';
import { ScanNavigatorProp } from 'nav/ScanNavigator';
import { useNavigation } from '@react-navigation/core';
import theme from 'constants/theme';

const BorderCardStyled = styled(BorderCard)`
  flex: 0.5;
`;

const TextM20 = styled.Text`
  margin: 20px;
`;

export default function ScanHelpScreen() {
  const navigation = useNavigation<ScanNavigatorProp<Routes.ScanHelp>>();

  return (
    <BasicScreen>
      <BorderCardStyled>
        <Ionicons
          name="arrow-back"
          size={40}
          color={theme.colors.main}
          onPress={() => navigation.goBack()}
        />
        <TextM20>QR HELPER</TextM20>
      </BorderCardStyled>
    </BasicScreen>
  );
}
