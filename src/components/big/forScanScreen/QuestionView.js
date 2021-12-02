import React from 'react';
import styled from "styled-components";
import { View, Button, Text } from 'react-native';


const QuestionViewCancelText = styled(Text)`
  color: white;
`;


const QuestionViewCancel = styled(View)`
  flex: 0.2;
  background-color: red;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 15px;
`;


const QuestionViewAnswerOptions = styled(View)`
  flex: 1;
  background-color: teal;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 15px;
`;


const QuestionViewTitleText = styled(Text)`
  margin: 10px;
  color: gray;
`;


const QuestionViewTitle = styled(View)`
  flex: 0.5;
  border-color: teal;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 15px;
  border-width: 2px;
`;


const QuestionView = ({
  scannedToken,
  handleAnswerOptionClick,
  reset,
}) => (
  <View>
    <QuestionViewTitle>
      <QuestionViewTitleText>
        {scannedToken.question}
      </QuestionViewTitleText>
    </QuestionViewTitle>
    <QuestionViewAnswerOptions>
      {scannedToken.answers.map((answer, index) => (
        <Button
          color="#ffffff"
          onPress={() =>
            handleAnswerOptionClick(answer.isCorrect)
          }
          title={answer.text}
          key={index}
        />
      ))}
    </QuestionViewAnswerOptions>
    <QuestionViewCancel>
      <QuestionViewCancelText onPress={() => reset()}>
        Cancel
      </QuestionViewCancelText>
    </QuestionViewCancel>
  </View>
)

export default QuestionView;

import { StyleSheet } from 'react-native'