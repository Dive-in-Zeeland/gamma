import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CollectorNavigationParams } from 'features/collector/components/CollectorNavigation';
import TitledScreen from 'features/collector/styles/TitledScreen';
import React from 'react';
import ColorButton from '../styles/ColorButton';
import ColorText from '../styles/ColorText';

type Props = NativeStackScreenProps<CollectorNavigationParams, 'Invalid'>;

const Test: React.FC<Props> = () => {
  return (
    <TitledScreen title="Title" subtitle="nobox screen" nobox spaced>
      <ColorText bold upper light>
        bold upper light: ipsum dolor sit amet, consectetur adipisicing elit.
        Maiores ipsam voluptatum nobis temporibus id corrupti ipsum obcaecati
        tempore reprehenderit quae?
      </ColorText>
      <ColorButton light>Light button</ColorButton>
      <ColorText bold light>
        bold light: ipsum dolor sit amet, consectetur adipisicing elit. Maiores
        ipsam voluptatum nobis temporibus id corrupti ipsum obcaecati tempore
        reprehenderit quae?
      </ColorText>
      <ColorButton light>Light button</ColorButton>
    </TitledScreen>
  );
};

export default Test;
