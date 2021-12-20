import React from 'react';
import { ScrollView } from 'react-native';
import { useAtom } from 'jotai';

import tokensAtom, { TokenType } from 'store/tokens';
import mapPositionAtom from 'store/mapPosition';
import TextBoxContainer from 'style/layout/TextBoxContainer';
import TextBox from 'style/boxes/TextBox';
import Body from 'style/layout/Body';
import { MainNavigatorProp } from 'nav/MainNavigator';
import { useNavigation } from '@react-navigation/core';
import { Routes } from 'constants/navigation';

const TokenScreen = () => {
  const [tokens] = useAtom(tokensAtom);
  const [mapPosition, setMapPosition] = useAtom(mapPositionAtom);
  const navigation = useNavigation<MainNavigatorProp<Routes.Map>>();

  function goToToken(token: TokenType) {
    setMapPosition({
      ...mapPosition,
      latitude: token.coords[0],
      longitude: token.coords[1],
    });
    navigation.navigate(Routes.Map);
  }

  return (
    <Body>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <TextBoxContainer>
          {/* TODO: TextBox style to depend on if token is collected */}
          {Object.entries(tokens).map(([tokenName, token], i) => (
            <TextBox onPress={() => goToToken(token)} key={i}>
              {tokenName}
            </TextBox>
          ))}
        </TextBoxContainer>
      </ScrollView>
    </Body>
  );
};

export default TokenScreen;