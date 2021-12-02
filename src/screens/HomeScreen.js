import React from 'react';
import styled from "styled-components";
import { StyleSheet, Text, View } from 'react-native';



const QrContainer = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-width: 3px;
  border-color: teal;
  border-radius: 15px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 20px;
`;



const QrSection = styled(View)`
  flex: 0.8;
`;



const Icon1 = styled(View)`
  flex: 1;
  background-color: teal;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;



const HelperContainer = styled(View)`
  flex: 0.1;
  flex-direction: row;
  border-radius: 15px;
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
`;



const Container = styled(View)`
  flex: 1;
  margin: 10px;
  background-color: white;
  border-radius: 15px;
`;



const Main = styled(View)`
  flex: 1;
  background-color: teal;
`;



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