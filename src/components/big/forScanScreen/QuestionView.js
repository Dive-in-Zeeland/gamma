import React from 'react';
import { View, Button, Text } from 'react-native';
import styles from '../../../styles/toBeRefactored/ScanScreenStyles';


const QuestionView = ({
  scannedToken,
  handleAnswerOptionClick,
  reset,
}) => (
  <View>
    <View style={styles.questionViewTitle}>
      <Text style={styles.questionViewTitleText}>
        {scannedToken.question}
      </Text>
    </View>
    <View style={styles.questionViewAnswerOptions}>
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
    </View>
    <View style={styles.questionViewCancel}>
      <Text style={styles.questionViewCancelText} onPress={() => reset()}>
        Cancel
      </Text>
    </View>
  </View>
)

export default QuestionView;
