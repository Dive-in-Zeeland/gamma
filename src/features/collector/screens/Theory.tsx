import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CollectorNavigationParams } from 'features/collector/components/CollectorNavigation';
import TitledScreen from 'features/collector/styles/TitledScreen';
import React from 'react';
import ColorButton from '../styles/ColorButton';
import CenterText from '../styles/prefab/CenterText';

type Props = NativeStackScreenProps<CollectorNavigationParams, 'Theory'>;

const Theory: React.FC<Props> = ({ navigation, route }) => {
  const { token, collect } = route.params;
  return (
    <TitledScreen
      title="Well done!"
      subtitle="Now get ready for a question"
      spaced
    >
      <CenterText>{token.content}</CenterText>
      <ColorButton
        onPress={() => navigation.push('Question', { token, collect })}
      >
        I am ready
      </ColorButton>
    </TitledScreen>
  );
};

export default Theory;
