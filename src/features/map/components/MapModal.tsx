import React from 'react';
import { Text } from 'react-native';
import ColorModal, { IModal } from 'components/ColorModal';

const MapModal: React.FC<IModal> = ({ isVisible, close }) => {
  return (
    <ColorModal isVisible={isVisible} close={close} title="Map Helper">
      <Text>Map Helper</Text>
    </ColorModal>
  );
};

export default MapModal;
