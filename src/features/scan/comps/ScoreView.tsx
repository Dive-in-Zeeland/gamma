import React from 'react';
import { View, Button, Text } from 'react-native';

export interface ScoreViewProps {
  postAnswerMsg: string;
  onBackToCameraPressed: () => void;
}

const ScoreView: React.FC<ScoreViewProps> = ({
  postAnswerMsg,
  onBackToCameraPressed,
}) => (
  <View>
    <Text>{postAnswerMsg}</Text>
    <Button
      color="#000000"
      onPress={onBackToCameraPressed}
      title="Back to camera"></Button>
  </View>
);

export default ScoreView;
