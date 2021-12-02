import React from "react";
import styled from "styled-components";
import { View, Button, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ButtonContainer = styled(View)`
  flex: 0.1;
  flex-direction: row;
  border-radius: 15px;
`;

const QrContainer = styled(View)`
  flex: 1;
  background-color: #fff;
  border-color: teal;
  align-items: center;
  justify-content: center;
`;

const QrSection = styled(View)`
  flex: 0.9;
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

const ContenView = ({ answerQuestionNow, reset, scannedToken }) => (
  <Main>
    <Home>
      <HelperContainer>
        <Icon1>
          <Text style={{ fontSize: 30, color: "white" }}>
            {scannedToken.place}
          </Text>
        </Icon1>
      </HelperContainer>
      <QrSection>
        <QrContainer>
          <Text style={{ margin: 10 }}>{scannedToken.content}</Text>
        </QrContainer>
        <ButtonContainer>
          <Icon1>
            <Text style={{ fontSize: 30, color: "white" }} onPress={() => { reset(); }}>
              Quit
            </Text>
          </Icon1>
          <Icon1>
            <Text style={{ fontSize: 30, color: "white" }} onPress={() => { answerQuestionNow(); }}>
              Question
            </Text>
          </Icon1>
        </ButtonContainer>
      </QrSection>
    </Home>
  </Main>
);

import { StyleSheet } from 'react-native'


export default ContenView;
