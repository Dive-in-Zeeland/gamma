import React from 'react';
import styled from "styled-components";
import { View } from 'react-native'
import ScoreView from './ScoreView';
import QuestionView from './QuestionView';


const QuestionContainer = styled(View)`
  flex: 1;
  background-color: #fff;
  margin: 20px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;


const QrSection = styled(View)`
  flex: 0.9;
`;


const Home = styled(View)`
  flex: 1;
  margin: 10px;
  background-color: white;
  border-radius: 15px;
`;


const Main = styled(View)`
  flex: 1;
  background-color: teal;
`;


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

import { StyleSheet } from 'react-native'