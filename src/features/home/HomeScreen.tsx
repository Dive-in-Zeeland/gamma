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

const HomeScreen = () => {
  const [tutorialModalVisible, setTutorialModalVisible] = useState(false);
  const [giftModalVisible, setGiftModalVisible] = useState(false);

  const tokensSnap = useSnapshot(tokensValt);

  function getProgress() {
    const collected = tokensSnap.length;
    const total = tokensSnap.reduce((prev, token) => {
      return prev + (token.isCollected ? 1 : 0);
    }, 0);
    return collected / total;
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

      {/* Title */}
      <Sizer>
        <Sizer w="70%" m="0 0 20px 0">
          <Sizer m="0 0 6px">
            <ColorText bold size="28px" light align="left">
              Hello, Daniils!
            </ColorText>
          </Sizer>
          <ColorText size="16px" light align="left">
            Enjoy a Token collection game created by our powerful designers.
          </ColorText>
        </Sizer>
        {/* Progress */}
        <ColorBox p="20px 30px" color="#617BCE" m="10px">
          <Sizer m="0 0 10px 0">
            <ColorText light>Collection Progress</ColorText>
          </Sizer>
          <Progress.Bar
            progress={getProgress()}
            width={null}
            color="#A4B8FF"
            unfilledColor="#8399EF"
            height={25}
            borderWidth={0}
          />
        </ColorBox>
        <Sizer row m="10px">
          <Sizer flex={1} m="0 20px 0 0" aspect={1}>
            <ColorBox flex={1} color="#617BCE" center>
              <Ionicons
                name="gift"
                size={60}
                color="white"
                onPress={() => setGiftModalVisible(true)}
              />
              <ColorText light>Free Gift</ColorText>
            </ColorBox>
          </Sizer>
          <Sizer flex={1} m="0 0 0 20px" aspect={1}>
            <ColorBox flex={1} color="#617BCE" center>
              <Ionicons
                name="school"
                size={60}
                color="white"
                onPress={() => setTutorialModalVisible(true)}
              />
              <ColorText light>Tutorial</ColorText>
            </ColorBox>
          </Sizer>
        </Sizer>
      </Sizer>
    </TitledScreen>
  );
};

export default HomeScreen;
