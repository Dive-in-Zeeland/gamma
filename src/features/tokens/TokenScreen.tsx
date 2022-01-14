import React from 'react';
import { ScrollView, View } from 'react-native';
import { useAtom } from 'jotai';

import tokensAtom, { TokenType } from 'store/tokens';
import mapPositionAtom from 'store/mapPosition';
import TextBoxContainer from 'style/layout/TextBoxContainer';
import TextBox from 'style/boxes/TextBox';
import TokenBox from 'style/boxes/TokenBox';
import BasicScreen from 'style/layout/BasicScreen';
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
      latitudeDelta: 0.09,
      longitudeDelta: 0.09,
    });
    navigation.navigate(Routes.Map);
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'teal' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{
          position: 'absolute',
          zIndex: 999,
          left: 4,
          top: 10,
          width: '110%',
          height: '103%',
        }}
      >
        <TextBoxContainer>
          {/* TODO: TextBox style to depend on if token is collected */}
          {Object.entries(tokens).map(([tokenName, token], i) => (
            <TokenBox
              onPress={() => goToToken(token)}
              key={i}
              tokenName={tokenName}
              collected={token.isCollected}
              place={token.place}
              cord1={token.coords[0]}
              cord2={token.coords[1]}
            />
          ))}
        </TextBoxContainer>
      </ScrollView>
    </View>
  );
};

export default TokenScreen;
