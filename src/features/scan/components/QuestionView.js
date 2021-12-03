import React from 'react';
import { View, Button, Text } from 'react-native';
import {
  QuestionViewCancelText,
  QuestionViewCancel,
  QuestionViewAnswerOptions,
  QuestionViewTitleText,
  QuestionViewTitle,
} from './styled'


const QuestionView = ({
  scannedToken,
  handleAnswerOptionClick,
  cancelQuestion,
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
      <QuestionViewCancelText onPress={() => cancelQuestion()}>
        Cancel
      </QuestionViewCancelText>
    </QuestionViewCancel>
  </View>
)

export default QuestionView;