import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

import Body from 'components/Body';
import TextBox from 'components/TextBox';
import TextBoxContainer from 'components/TextBoxContainer';
import { TextM10 } from 'components/Text';

const MyTextBoxContainer = styled(TextBoxContainer)`
  flex-direction: row;
  margin: 0 5px 30px;
`;

const MyView = styled(View)`
  flex: 0.9;
`;

const MyContentContainer = styled(View)`
  flex: 1;
  background-color: #fff;
  border-color: teal;
  align-items: center;
  justify-content: center;
`;

const ContenView = ({ answerQuestionNow, reset, scannedToken }) => (
  <Body>
    <TextBoxContainer>
      <TextBox>{scannedToken.place}</TextBox>
    </TextBoxContainer>

    <MyView>
      <MyContentContainer>
        <TextM10>{scannedToken.content}</TextM10>
      </MyContentContainer>

      <MyTextBoxContainer>
        <TextBox onPress={reset}>Quit</TextBox>
        <TextBox onPress={answerQuestionNow}>Question</TextBox>
      </MyTextBoxContainer>
    </MyView>
  </Body>
);

export default ContenView;
