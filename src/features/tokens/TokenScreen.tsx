import React from 'react';
import { ScrollView, View } from 'react-native';

import TextBoxContainer from 'style/layout/TextBoxContainer';
import { MainNavigatorProp } from 'nav/MainNavigator';
import { useNavigation } from '@react-navigation/core';
import { Routes } from 'constants/navigation';

import tokensValt, { TokenType } from 'store/tokens';
import mapValt from 'store/map';
import { useSnapshot } from 'valtio';
import TitledScreen from 'features/collector/styles/TitledScreen';
import TokenBox from './TokenBox';

const TokenScreen = () => {
  const tokensSnap = useSnapshot(tokensValt);
  const navigation = useNavigation<MainNavigatorProp<Routes.Map>>();

  function goToToken(token: TokenType) {
    mapValt.setPosition({
      latitude: token.coords[0],
      longitude: token.coords[1],
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
    navigation.navigate(Routes.Map);
  }

  return (
    <TitledScreen
      title="Tokens"
      subtitle="Overview your token collection"
      nobox
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* TODO: TextBox style to depend on if token is collected */}
        {tokensSnap.map(token => (
          <TokenBox
            key={token.place}
            token={token}
            onPress={() => goToToken(token)}
          />
        ))}
      </ScrollView>
    </TitledScreen>
  );
};

export default TokenScreen;
