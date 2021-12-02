import React from "react";
import styled from "styled-components";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";

import tokensAtom from '../store/tokens';
import mapPositionAtom from "../store/mapPosition";
import { useAtom } from 'jotai';


const HelperContainer = styled(View)`
  flex: 0.1;
  flex-direction: row;
  border-radius: 15px;
  margin: 10px;
`;


const ScrollViewStyled = styled(ScrollView)`
  margin: 0 20px;
`;


const Home = styled(View)`
  flex: 1;
  margin: 10px;
  background-color: white;
  border-radius: 15px;
`;


const Main = styled(View)`
  flex: 1;
  background-color: teal;
`;

const Icon1 = styled(View)`
  flex: 1;
  background-color: teal;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;


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
