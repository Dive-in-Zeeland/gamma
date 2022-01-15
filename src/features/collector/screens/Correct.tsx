import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CollectorNavigationParams } from 'features/collector/components/CollectorNavigation';
import TitledScreen from 'features/collector/styles/TitledScreen';
import React from 'react';
import { useTheme } from 'styled-components/native';
import ColorBox from '../styles/ColorBox';
import ColorButton from '../styles/ColorButton';
import ColorText from '../styles/ColorText';
import Sizer from '../styles/Sizer';

type Props = NativeStackScreenProps<CollectorNavigationParams, 'Correct'>;

const Correct: React.FC<Props> = ({ navigation, route }) => {
  const { tokenValt } = route.params;
  const theme = useTheme();
  return (
    <TitledScreen title="Correct!" subtitle="Token collected!" spaced>
      <Sizer center flex={1} m="0 5px">
        <ColorText bold>You have collected the token!</ColorText>
        <ColorBox
          p="20px"
          m="10px"
          color="white"
          bw="5px"
          bcolor={theme.colors.darkText}
        >
          <ColorText upper bold size="20px">
            {tokenValt.place}
          </ColorText>
        </ColorBox>
      </Sizer>
      <ColorButton onPress={() => navigation.popToTop()}>
        To the scanner
      </ColorButton>
    </TitledScreen>
  );
};

export default Correct;
