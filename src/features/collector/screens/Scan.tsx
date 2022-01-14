import { useAtom } from 'jotai';
import React from 'react';
import tokensAtom from 'store/tokens';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import TitledScreen from '../styles/TitledScreen';
import Scanner, { IScanner } from '../components/Scanner';
import { CollectorNavigationParams } from '../components/CollectorNavigation';
import ColorBox from '../styles/ColorBox';

type Props = NativeStackScreenProps<CollectorNavigationParams, 'Scan'>;

const Scan: React.FC<Props> = ({ navigation }) => {
  const [tokens, setTokens] = useAtom(tokensAtom);

  const onScan: IScanner['onScan'] = ({ data: tokenName }) => {
    const token = tokenName in tokens ? tokens[tokenName] : null;

    if (!token) {
      navigation.navigate('Invalid');
      return;
    }

    navigation.push('Theory', {
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
    <TitledScreen title="Found QR?" subtitle="Scan here and get a token!" nobox>
      <ColorBox br="20px" flex={1}>
        <Scanner onScan={onScan} />
      </ColorBox>
    </TitledScreen>
  );
};

export default Scan;
