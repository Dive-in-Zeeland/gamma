import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CollectorNavigationParams } from 'features/collector/navigation';
import TitledScreen from 'features/collector/shared/TitledScreen';
import React from 'react';
import styled from 'styled-components/native';
import ColorButton from '../shared/ColorButton';

type Props = NativeStackScreenProps<CollectorNavigationParams, 'Invalid'>;

const Spaced = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const Center = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text`
  font-size: 18px;
  text-align: center;
`;

const Invalid: React.FC<Props> = ({ navigation }) => {
  return (
    <TitledScreen titleText="Invalid code">
      <Spaced>
        {/* Top */}
        <Center>
          <Text>
            Oups, seems that you scanned some other QR code. If not, try to scan
            it again or talk to manager. Good luck!
          </Text>
        </Center>
        {/* Bottom */}
        <ColorButton onPress={() => navigation.navigate('Scan')}>
          Go back
        </ColorButton>
      </Spaced>
    </TitledScreen>
  );
};

export default Invalid;
