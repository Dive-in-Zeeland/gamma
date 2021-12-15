import React from 'react';
import { ScrollView } from 'react-native';
import { useAtom } from 'jotai';

import tokensAtom from 'store/tokens';
import mapPositionAtom from 'store/mapPosition';
import TextBoxContainer from 'components/TextBoxContainer';
import TextBox from 'components/TextBox';
import Body from 'components/Body';

const TokenScreen = ({ navigation: nav }) => {
  const [tokens] = useAtom(tokensAtom);
  const [mapPosition, setMapPosition] = useAtom(mapPositionAtom);

  function goToToken(token) {
    setMapPosition({
      ...mapPosition,
      latitude: token.coords[0],
      longitude: token.coords[1],
    });
    nav.navigate('MapStack');
  }

  return (
    <Body>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
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
