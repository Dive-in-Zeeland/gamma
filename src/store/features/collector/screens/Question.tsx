import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CollectorNavigationParams } from 'features/collector/components/CollectorNavigation';
import TitledScreen from 'features/collector/styles/TitledScreen';
import React from 'react';
import { TokenType } from 'store/tokens';
import ColorButton from '../styles/ColorButton';
import Sizer from '../styles/Sizer';
import SizedImage from '../styles/SizedImage';
import CenterText from '../styles/prefab/CenterText';

type Props = NativeStackScreenProps<CollectorNavigationParams, 'Theory'>;

const Theory: React.FC<Props> = ({ navigation, route }) => {
  const { tokenValt } = route.params;

  function selectAnswer(answer: TokenType['answers'][number]) {
    if (answer.isCorrect) {
      tokenValt.collect();
      navigation.push('Correct', { tokenValt });
    } else {
      navigation.push('Wrong');
    }
  }

  return (
    <TitledScreen
      title="Almost there!"
      subtitle="Now answer the question"
      spaced
    >
      <Sizer />
      <Sizer center>
        <SizedImage
          source={require('../assets/question-mark.png')}
          width="60%"
          height="60%"
        />
      </Sizer>
      {/* Using valt here */}
      <CenterText noflex>{tokenValt.question}</CenterText>
      <Sizer>
        {tokenValt.answers.map((answer, i) => (
          <ColorButton
            onPress={() => selectAnswer(answer)}
            key={answer.text + i}
          >
            {answer.text}
          </ColorButton>
        ))}
      </Sizer>
    </TitledScreen>
  );
};

export default Theory;
