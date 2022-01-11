import React from 'react';
import styled from 'styled-components';
import {View} from 'react-native';
import { WebView } from 'react-native-webview';
import MainFarm from 'features/game/gameApp';

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
    <Main>
      <Home>
        <MainFarm />
      </Home>
    </Main>
  );
};
export default GameScreen;
