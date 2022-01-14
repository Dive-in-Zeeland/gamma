import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CollectorNavigationParams } from 'features/collector/components/CollectorNavigation';
import TitledScreen from 'features/collector/styles/TitledScreen';
import React from 'react';
import ColorButton from '../styles/ColorButton';
import CenterText from '../styles/prefab/CenterText';

type Props = NativeStackScreenProps<CollectorNavigationParams, 'Invalid'>;

const Invalid: React.FC<Props> = ({ navigation }) => {
  return (
    <TitledScreen title="Invalid code" subtitle="Try to scan again" spaced>
      <CenterText>
        Oups, seems that you scanned some other QR code. If not, try to scan it
        again or talk to manager. Good luck!
      </CenterText>
      <ColorButton onPress={() => navigation.popToTop()}>Go back</ColorButton>
    </TitledScreen>
  );
};

export default Invalid;
