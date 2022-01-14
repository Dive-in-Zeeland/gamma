import React from 'react';
import styled from 'styled-components/native';

import QuestionView, {
  QuestionViewProps,
} from 'features/scan/comps/QuestionView';
import ScoreView, { ScoreViewProps } from 'features/scan/comps/ScoreView';
import BasicScreen from 'style/layout/BasicScreen';

const MyView = styled.View`
  flex: 0.9;
`;

const MyQuestionContainer = styled.View`
  flex: 1;
  background-color: #fff;
  margin: 20px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export interface AfterScanViewProps extends QuestionViewProps, ScoreViewProps {
  isAnswered: boolean;
}

const AfterScanView: React.FC<AfterScanViewProps> = ({
  isAnswered,
  postAnswerMsg,
  onBackToCameraPressed,
  scannedToken,
  onAnswerOptionClick,
  onCancelQuestionPress,
}) => (
  <BasicScreen>
    <MyView>
      <MyQuestionContainer>
        {isAnswered ? (
          <ScoreView
            postAnswerMsg={postAnswerMsg}
            onBackToCameraPressed={onBackToCameraPressed}
          />
        ) : (
          <QuestionView
            scannedToken={scannedToken}
            onAnswerOptionClick={onAnswerOptionClick}
            onCancelQuestionPress={onCancelQuestionPress}
          />
        )}
      </MyQuestionContainer>
    </MyView>
  </BasicScreen>
);

export default AfterScanView;
