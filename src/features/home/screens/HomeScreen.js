import React from 'react';
import { Text } from 'react-native';
import {
  Main,
  Container,
  HelperContainer,
  Icon1,
  QrSection,
  QrContainer,
} from '../components/styled'


const HomeScreen = () => (
  <Main>
    <Container>
      <HelperContainer>
        <Icon1>
          <Text style={{ fontSize: 30, color: "white", margin: 10 }}>
            Dive in Zeeland
          </Text>
        </Icon1>
      </HelperContainer>

      <QrSection>
        <QrContainer>
          <Text style={{ margin: 10 }}>
            This is out token collection game called DIZ-GAME. It is an interactive game for children to get to know better the underwater world of Zeeland.
          </Text>
          <Text style={{ margin: 10 }}>
            There are 5 different screens. Home, Token, Map, Camera and Settings.
          </Text>
          <Text style={{ margin: 10 }}>
            In the future this screen will describe the initial game and its rules. And also have a links to Gift code and Played game (But to play this game you must collect all the tokens).
          </Text>
          <Text style={{ margin: 20 }}>
            For best user experience right now, please you IOS devices. They are better optimized.
          </Text>
        </QrContainer>
      </QrSection>
    </Container>
  </Main>
);

export default HomeScreen;