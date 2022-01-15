import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Modal from 'react-native-modal';

interface ITutorialModal {
  isModalVisible: boolean;
  toggleModal: () => void;
}

const TutorialModal: React.FC<ITutorialModal> = ({
  isModalVisible,
  toggleModal,
}) => {
  return (
    <Modal isVisible={isModalVisible}>
      <View
        style={{
          position: 'absolute',
          height: '105%',
          width: '110%',
          top: 0,
          left: '-5.5%',
          backgroundColor: 'white',
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            position: 'absolute',
            zIndex: 99,
            fontSize: 35,
            fontWeight: 'bold',
            color: '#00a7a7',
            top: '3%',
            left: '5%',
          }}
        >
          Tutorial
        </Text>
        <Ionicons
          name="close-circle-outline"
          size={60}
          color="#00a7a7"
          onPress={toggleModal}
          style={{
            position: 'absolute',
            zIndex: 999,
            top: '0.5%',
            left: '82%',
          }}
        />
      </View>
    </Modal>
  );
};

export default TutorialModal;
