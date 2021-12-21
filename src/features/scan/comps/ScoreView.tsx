import React from 'react';
import { Button, Text } from 'react-native';

export interface ScoreViewProps {
  postAnswerMsg: string;
  onBackToCameraPressed: () => void;
}

const ScoreView: React.FC<ScoreViewProps> = ({
  postAnswerMsg,
  onBackToCameraPressed,
}) => (
  <>
    <Text>{postAnswerMsg}</Text>
    <Button
      color="#000000"
      onPress={onBackToCameraPressed}
      title="Back to camera"></Button>
  </>
);

export default ScoreView;
