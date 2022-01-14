import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CollectorNavigationParams } from 'features/collector/components/CollectorNavigation';
import TitledScreen from 'features/collector/styles/TitledScreen';
import React from 'react';
import ColorButton from '../styles/ColorButton';
import Sizer from '../styles/Sizer';
import CenterText from '../styles/prefab/CenterText';

type Props = NativeStackScreenProps<CollectorNavigationParams, 'Wrong'>;

const Correct: React.FC<Props> = ({ navigation }) => {
  return (
    <TitledScreen title="Incorrect??" subtitle="No problem, try again" spaced>
      <CenterText>
        Hmmm.. That&apos;s not right. Please read the theory and try again.
      </CenterText>

      <Sizer>
        <ColorButton onPress={() => navigation.pop(2)}>Try again</ColorButton>
        <ColorButton onPress={() => navigation.popToTop()}>
          To the scanner
        </ColorButton>
      </Sizer>
    </TitledScreen>
  );
};

export default Correct;
