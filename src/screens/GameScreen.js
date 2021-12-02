import React from "react";
import styled from "styled-components";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

const Container = styled(WebView)`
  flex: 1;
  border-radius: 15px;
  margin: 10px;
  border-width: 2px;
  border-color: teal;
  align-items: center;
  justify-content: center;
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

const GameScreen = ({ navigation: nav }) => {
    return (
      (<Main>
        <Home>
          <Container source={{ uri: "https://puginarug.com/" }} />
        </Home>
      </Main>)
    );
};
export default GameScreen;
