import React from "react";
import { Text, Pressable } from "react-native";
import tokensAtom from '../../../store/tokens';
import mapPositionAtom from "../../../store/mapPosition";
import { useAtom } from 'jotai';
import {
  Icon1,
  Main,
  Home,
  ScrollViewStyled,
  HelperContainer,
} from '../components/styled'


const TokenScreen = ({ navigation: nav }) => {

  const [tokens] = useAtom(tokensAtom);
  const [mapPosition, setMapPosition] = useAtom(mapPositionAtom);

  function goToToken(token) {
    console.log('go to token pressed');
    setMapPosition({
      ...mapPosition,
      latitude: token.coords[0],
      longitude: token.coords[1],
    });
    nav.navigate("MapStack");
  }

  return (
    (<Main>
      <Home>
        <Text>Overview your tokens</Text>
        <ScrollViewStyled
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {Object.entries(tokens).map(([tokenName, token], i) => (
            <Pressable onPress={() => goToToken(token)} key={i}>
              <HelperContainer>
                <Icon1 style={[token.isCollected && { backgroundColor: "#7FABAB" }]}>
                  <Text style={{ fontSize: 30, color: "white", margin: 10 }}>
                    {tokenName}
                  </Text>
                </Icon1>
              </HelperContainer>
            </Pressable>
          ))}
        </ScrollViewStyled>
      </Home>
    </Main>)
  );
}

export default TokenScreen;
