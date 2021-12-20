import React from 'react';
import { Button, Text, View } from 'react-native';
import { TokenType } from 'store/tokens';
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

export interface QuestionViewProps {
  scannedToken: TokenType;
  onAnswerOptionClick: (answer: TokenType['answers'][number]) => void;
  onCancelQuestionPress: () => void;
}

const QuestionView: React.FC<QuestionViewProps> = ({
  scannedToken,
  onAnswerOptionClick,
  onCancelQuestionPress,
}) => (
  <View>
    <MyTitle>{scannedToken.question}</MyTitle>

    <MyAnswerOptions>
      {scannedToken.answers.map((answer, index) => (
        <Button
          color="#ffffff"
          onPress={() => onAnswerOptionClick(answer)}
          title={answer.text}
          key={index}
        />
      ))}
    </MyAnswerOptions>

    <MyCancel onPress={onCancelQuestionPress}>Cancel</MyCancel>
  </View>
);

export default QuestionView;
