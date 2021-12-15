import React from 'react';
import { Button, Text, View } from 'react-native';
import styled from 'styled-components/native';

const MyCancel = styled(Text)`
  flex: 0.2;
  background-color: red;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 15px;
  color: white;
`;

const MyAnswerOptions = styled(View)`
  flex: 1;
  background-color: teal;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 15px;
`;

const MyTitle = styled(Text)`
  flex: 0.5;
  border-color: teal;
  align-items: center;
  justify-content: center;
  margin: 20px;
  border-radius: 15px;
  border-width: 2px;
  color: gray;
`;

const QuestionView = ({ scannedToken, handleAnswerOptionClick, cancelQuestion }) => (
  <View>
    <MyTitle>{scannedToken.question}</MyTitle>

    <MyAnswerOptions>
      {scannedToken.answers.map((answer, index) => (
        <Button
          color="#ffffff"
          onPress={() => handleAnswerOptionClick(answer.isCorrect)}
          title={answer.text}
          key={index}
        />
      ))}
    </MyAnswerOptions>

    <MyCancel onPress={cancelQuestion}>Cancel</MyCancel>
  </View>
);

export default QuestionView;
