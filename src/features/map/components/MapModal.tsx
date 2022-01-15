import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Modal from 'react-native-modal';

interface IMapModal {
  isVisible: boolean;
  close: () => void;
}

const MapModal: React.FC<IMapModal> = ({ isVisible, close }) => {
  return (
    <Modal isVisible={isVisible}>
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
          Map Helper
        </Text>
        <Ionicons
          name="close-circle-outline"
          size={60}
          color="#00a7a7"
          onPress={close}
          style={{
            position: 'absolute',
            top: '0.5%',
            left: '80%',
          }}
        />
      </View>
    </Modal>
  );
};

export default MapModal;
