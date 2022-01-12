import { useAtom } from 'jotai';
import React from 'react';
import tokensAtom from 'store/tokens';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import TitledScreen from '../shared/TitledScreen';
import Scanner, { IScanner } from './Scanner';
import { CollectorNavigationParams } from '../navigation';

type Props = NativeStackScreenProps<CollectorNavigationParams, 'Scan'>;

const Scan: React.FC<Props> = ({ navigation }) => {
  const [tokens, setTokens] = useAtom(tokensAtom);

  const onScan: IScanner['onScan'] = ({ data: tokenName }) => {
    console.log(`Scanned ${tokenName}`);

    const token = tokenName in tokens ? tokens[tokenName] : null;

    if (!token) {
      navigation.navigate('Invalid');
      return;
    }

    navigation.navigate('Theory', {
      token,
      collect: () =>
        setTokens(_tokens => ({
          ..._tokens,
          [tokenName]: {
            ...token,
            isCollected: true,
          },
        })),
    });
  };

  return (
    <TitledScreen titleText="Found QR? Scan here and get a token!">
      <Scanner onScan={onScan} />
    </TitledScreen>
  );
};

export default Scan;
