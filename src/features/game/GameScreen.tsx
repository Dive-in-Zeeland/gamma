import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { WebView } from 'react-native-webview';
import MainFarm from 'features/game/gameApp';

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

const collection = [
  'feeder',
  'fisherMan',
  'fishFarm',
  'incubator',
  'fishFactory',
];

//TODO Create ranks for the fish collection (Start UP, Comapny, Industry, Empire ).
//TODO Coster Tycon example on representing the amount of fish or farms you have.
//TODO Export the file in different components.

const GameScreen = ({ navigation: nav }) => {
  return (
    <Main>
      <Home>
        <MainFarm />
      </Home>
    </Main>
  );
};
export default GameScreen;

const styles = StyleSheet.create({
  white: {
    color: 'black',
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  margin: {
    margin: 10,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'teal',
    padding: 10,
  },
});
