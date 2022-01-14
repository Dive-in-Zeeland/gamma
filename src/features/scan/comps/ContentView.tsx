import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

import BasicScreen from 'style/layout/BasicScreen';
import TextBox from 'style/boxes/TextBox';
import TextBoxContainer from 'style/layout/TextBoxContainer';
import { TextM10 } from 'style/typo/Text';
import { TokenType } from 'store/tokens';

const MyTextBoxContainer = styled(TextBoxContainer)`
  flex-direction: row;
  margin: 0 5px 30px;
`;

const MyView = styled.View`
  flex: 0.9;
`;

const MyContentContainer = styled.View`
  flex: 1;
  background-color: #fff;
  border-color: ${props => props.theme.colors.main};
  align-items: center;
  justify-content: center;
`;

export interface ContentViewProps {
  onAnswerQuestionPress: () => void;
  reset: () => void;
  token: TokenType;
}

const ContentView: React.FC<ContentViewProps> = ({
  onAnswerQuestionPress,
  reset,
  token,
}) => (
  <BasicScreen>
    <TextBoxContainer>
      <TextBox>{token.place}</TextBox>
    </TextBoxContainer>

    <MyView>
      <MyContentContainer>
        <TextM10>{token.content}</TextM10>
      </MyContentContainer>

      <MyTextBoxContainer>
        <TextBox onPress={() => reset()}>Quit</TextBox>
        <TextBox onPress={() => onAnswerQuestionPress()}>Question</TextBox>
      </MyTextBoxContainer>
    </MyView>
  </BasicScreen>
);

export default ContentView;
