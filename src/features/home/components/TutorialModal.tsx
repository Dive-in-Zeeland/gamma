import React from 'react';
import { Text } from 'react-native';
import ColorModal, { IModal } from 'components/ColorModal';

const TutorialModal: React.FC<IModal> = ({ isVisible, close }) => {
  return (
    <ColorModal isVisible={isVisible} close={close} title="Tutorial">
      <Text>Tutorial</Text>
    </ColorModal>
  );
};

export default TutorialModal;
