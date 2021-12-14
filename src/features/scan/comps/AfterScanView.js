import React from 'react';
import styled from 'styled-components';

import QuestionView from 'src/features/scan/comps/QuestionView';
import ScoreView from 'src/features/scan/comps/ScoreView';
import Body from 'src/components/Body';
import { View } from 'react-native';

const MyView = styled(View)`
  flex: 0.9;
`;

const MyQuestionContainer = styled(View)`
  flex: 1;
  background-color: #fff;
  margin: 20px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

const AfterScanView = (props) => (
  <Body>
    <MyView>
      <MyQuestionContainer>
        {props.isAnswered
          ?
          <ScoreView {...props} />
          :
          <QuestionView {...props} />
        }
      </MyQuestionContainer>
    </MyView>
  </Body>
);

export default AfterScanView;