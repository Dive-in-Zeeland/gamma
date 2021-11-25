import React from 'react';
import { View } from 'react-native'
import ScoreView from './ScoreView';
import QuestionView from './QuestionView';
import styles from '../../../styles/toBeRefactored/ScanScreenStyles';


const AfterScanView = (props) => (
  <View style={styles.main}>
    <View style={styles.home}>
      <View style={styles.qrSection}>
        <View style={styles.questionContainer}>
          {props.isAnswered
            ?
            <ScoreView {...props} />
            :
            <QuestionView {...props} />
          }
        </View>
      </View>
    </View>
  </View>
)

export default AfterScanView;