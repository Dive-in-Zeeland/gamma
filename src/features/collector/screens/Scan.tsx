import React from 'react';
import tokensValt from 'store/tokens';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import TitledScreen from '../styles/TitledScreen';
import Scanner, { IScanner } from '../components/Scanner';
import { CollectorNavigationParams } from '../components/CollectorNavigation';
import ColorBox from '../styles/ColorBox';

type Props = NativeStackScreenProps<CollectorNavigationParams, 'Scan'>;

const Scan: React.FC<Props> = ({ navigation }) => {
  const onScan: IScanner['onScan'] = ({ data: tokenName }) => {
    const tokenValt = tokensValt.find(tk => tk.name === tokenName);

    if (tokenValt === undefined) {
      navigation.navigate('Invalid');
      return;
    }

    navigation.push('Theory', {
      tokenValt,
    });
  };

  return (
    <TitledScreen title="Found QR?" subtitle="Scan here and get a token!" nobox>
      <ColorBox br="20px" flex={1}>
        <Scanner onScan={onScan} />
      </ColorBox>
    </TitledScreen>
  );
};

export default Scan;
