import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Progress from 'react-native-progress';
import tokensValt from 'store/tokens';
import LineGradient from 'features/home/components/LineGradient';
import { useSnapshot } from 'valtio';
import TitledScreen from 'features/collector/styles/TitledScreen';
import Sizer from 'features/collector/styles/Sizer';
import ColorBox from 'features/collector/styles/ColorBox';
import ColorText from 'features/collector/styles/ColorText';
import TutorialModal from './components/TutorialModal';
import FreeGiftModal from './components/FreeGiftModal';

const ProgressCard: React.FC<{ progress: number }> = ({ progress }) => (
  <ColorBox p="20px 40px" color="#7f94d7" m="10px">
    <Progress.Bar
      progress={progress}
      width={null}
      color="#70be7d"
      unfilledColor="white"
      height={25}
      borderWidth={0}
    />
    <Sizer m="10px 0 0 0">
      <ColorText light>Collection Progress</ColorText>
    </Sizer>
  </ColorBox>
);

const SquareCard: React.FC<{
  m: string;
  icon: string;
  color:string;
  ionColor:string;
  dark:boolean
  onPress: () => void;
}> = ({ m, icon, onPress, children, color, ionColor, dark }) => (
  <Sizer flex={1} m={m} aspect={1}>
    <ColorBox flex={1} color={color} center>
      <Ionicons name={icon as any} size={60} color={ionColor} onPress={onPress} />
      
      {(dark === true)? <ColorText dark bold>{children}</ColorText>: <ColorText light bold>{children}</ColorText> }
    </ColorBox>
  </Sizer>
);

const Title: React.FC<{
  title: string;
  subtitle: string;
}> = ({ title, subtitle }) => (
  <Sizer w="70%" m="0 0 10px 10px">
    <Sizer m="0 0 6px">
      <ColorText bold size="23px" light align="left">
        {title}
      </ColorText>
    </Sizer>
    <ColorText size="13px" light align="left">
      {subtitle}
    </ColorText>
  </Sizer>
);

const HomeScreen = () => {
  const [tutorialModalVisible, setTutorialModalVisible] = useState(false);
  const [giftModalVisible, setGiftModalVisible] = useState(false);

  const tokensSnap = useSnapshot(tokensValt);

  function getProgress() {
    const collected = tokensSnap.length;
    const total = tokensSnap.reduce((prev, token) => {
      return prev + (token.isCollected ? 1 : 0);
    }, 0);
    return total/collected;
  }

  return (
    <TitledScreen title="" subtitle="" nobox spaced>
      <LineGradient />

      <TutorialModal
        isVisible={tutorialModalVisible}
        close={() => setTutorialModalVisible(false)}
      />

      <FreeGiftModal
        isVisible={giftModalVisible}
        close={() => setGiftModalVisible(false)}
      />

      <Sizer />

      <Sizer>
        <Title
          title="Hello, Daniils!"
          subtitle="Enjoy a Token collection game created by our powerful designers."
        />
        <ProgressCard progress={getProgress()} />

        <Sizer row m="10px">
          <SquareCard
            m="0 10px 0 0"
            icon="gift"
            onPress={() => setGiftModalVisible(true)}
            color='#7088d3'
            ionColor='white'
            dark={false}
          >
            Free Gift
          </SquareCard>

          <SquareCard
            m="0 0 0 10px"
            icon="school"
            onPress={() => setTutorialModalVisible(true)}
            color='white'
            ionColor='#384E86'
            dark={true}
          >
            Tutorial
          </SquareCard>
        </Sizer>
      </Sizer>
    </TitledScreen>
  );
};

export default HomeScreen;
