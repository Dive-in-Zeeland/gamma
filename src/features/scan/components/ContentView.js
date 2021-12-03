import React from "react";
import { Text } from "react-native";
import {
  ButtonContainer,
  QrContainer,
  QrSection,
  Icon1,
  HelperContainer,
  Home,
  Main,
} from './styled'


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

export default ContenView;
