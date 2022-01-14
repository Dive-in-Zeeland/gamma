import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Progress from 'react-native-progress';
import { useAtom } from 'jotai';
import tokensAtom from 'store/tokens';
import LineGradient from 'features/home/Components/LineGradient';
import TutorialModal from './Components/TutorialModal';
import FreeGiftModal from './Components/FreeGiftModal';

const HomeScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [isModalVisible2, setModalVisible2] = useState(false);

  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };

  const [tokens] = useAtom(tokensAtom);

  const totalTokens = Object.keys(tokens).length;
  const tokensCollected = Object.values(tokens).reduce((prev, token) => {
    return token.isCollected ? prev + 1 : prev;
  }, 0);

  return (
    <View style={{ flex: 1, backgroundColor: 'teal' }}>
      <LineGradient />

      <TutorialModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />

      <FreeGiftModal
        isModalVisible={isModalVisible2}
        toggleModal={toggleModal2}
      />

      <Text
        style={{
          position: 'absolute',
          zIndex: 99,
          top: '35%',
          left: '5%',
          fontSize: 30,
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        Hello, Daniils!
      </Text>

      <Text
        style={{
          position: 'absolute',
          zIndex: 99,
          top: '42%',
          left: '5%',
          right: '30%',
          fontSize: 15,
          color: 'white',
        }}
      >
        Enjoy a Token collection game created by our powerful designers.
      </Text>

      <View
        style={{
          position: 'absolute',
          zIndex: 99,
          left: '3%',
          top: '50%',
          backgroundColor: 'teal',
          height: '30%',
          width: '94%',
          borderRadius: 15,
        }}
      />

      <View
        style={{
          position: 'absolute',
          zIndex: 99,
          left: '3%',
          top: '70%',
          backgroundColor: 'teal',
          height: '30%',
          width: '94%',
          borderRadius: 10,
        }}
      />

      <View
        style={{
          position: 'absolute',
          zIndex: 999,
          left: '5%',
          top: '52%',
          backgroundColor: '#00cece',
          height: '19%',
          width: '90%',
          borderRadius: 10,
        }}
      >
        <View
          style={{
            position: 'absolute',
            zIndex: 999,
            left: '5%',
            top: '15%',
            width: '90%',
          }}
        >
          <Progress.Bar
            progress={tokensCollected / totalTokens}
            width={null}
            height={40}
            color="#44EF9D"
            borderWidth={3}
          />
        </View>
        <Text
          style={{
            position: 'absolute',
            zIndex: 999,
            top: '65%',
            left: '5%',
            fontSize: 15,
            fontWeight: 'bold',
            color: 'teal',
          }}
          onPress={() => {
            toggleModal();
          }}
        >
          Token collection game progress!
        </Text>
      </View>

      <View
        style={{
          position: 'absolute',
          zIndex: 999,
          left: '5%',
          top: '74%',
          backgroundColor: '#00a7a7',
          height: '24%',
          width: '42%',
          borderRadius: 10,
        }}
      >
        <Ionicons
          name="gift"
          size={60}
          color="white"
          style={{
            position: 'absolute',
            zIndex: 999,
            left: '33%',
            top: '15%',
          }}
          onPress={() => {
            toggleModal2();
          }}
        />
        <Text
          style={{
            position: 'absolute',
            left: '20%',
            top: '60%',
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          Free Gift
        </Text>
      </View>

      <View
        style={{
          position: 'absolute',
          zIndex: 999,
          left: '53%',
          top: '74%',
          backgroundColor: 'white',
          height: '24%',
          width: '42%',
          borderRadius: 10,
        }}
      >
        <Ionicons
          name="school"
          size={60}
          color="#00a7a7"
          style={{
            position: 'absolute',
            zIndex: 999,
            left: '33%',
            top: '15%',
          }}
          onPress={() => {
            toggleModal();
          }}
        />
        <Text
          style={{
            position: 'absolute',
            left: '23%',
            top: '60%',
            fontSize: 25,
            fontWeight: 'bold',
            color: '#00a7a7',
          }}
        >
          Tutorial
        </Text>
        <View />
      </View>
    </View>
  );
};

export default HomeScreen;
