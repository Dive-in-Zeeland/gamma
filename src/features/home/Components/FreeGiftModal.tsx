import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Modal from 'react-native-modal';

interface IFreeGiftModal {
  isModalVisible: boolean;
  toggleModal: () => void;
}

const FreeGiftModal: React.FC<IFreeGiftModal> = ({
  isModalVisible,
  toggleModal,
}) => {
  return (
    <Modal isVisible={isModalVisible}>
      <View
        style={{
          position: 'absolute',
          height: '110%',
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
          Free gift
        </Text>
        <Ionicons
          name="close-circle-outline"
          size={60}
          color="#00a7a7"
          onPress={toggleModal}
          style={{
            position: 'absolute',
            top: '0.5%',
            left: '80%',
          }}
        />

        <View
          style={{
            position: 'absolute',
            zIndex: 99,
            left: '20%',
            top: '27%',
            backgroundColor: '#00a7a7',
            height: '40%',
            width: '60%',
            borderRadius: 12,
          }}
        />
        <Text
          style={{
            position: 'absolute',
            zIndex: 99,
            left: '20%',
            top: '70%',
            width: '60%',
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'teal',
          }}
        >
          Show this code to the gift wending machine.
        </Text>
      </View>
    </Modal>
  );
};

export default FreeGiftModal;
