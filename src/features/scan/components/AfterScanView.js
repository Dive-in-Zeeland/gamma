import React from 'react';
import ScoreView from './ScoreView';
import QuestionView from './QuestionView';
import {
  QuestionContainer,
  QrSection,
  Home,
  Main,
} from './styled'


const AfterScanView = (props) => (
  <Main>
    <Home>
      <QrSection>
        <QuestionContainer>
          {props.isAnswered
            ?
            <ScoreView {...props} />
            :
            <QuestionView {...props} />
          }
        </QuestionContainer>
      </QrSection>
    </Home>
  </Main>
)

export default AfterScanView;