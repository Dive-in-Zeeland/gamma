import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import ModalRN from 'react-native-modal';
import styled from 'styled-components/native';

const Modal = styled(ModalRN as any)`
  margin: 0;
  margin-top: 10%;
  border-radius: 15px;
  background-color: white;
  padding: 10px;
  justify-content: flex-start;
  flex: 1;
`;

const ModalTitleText = styled.Text`
  font-weight: bold;
  font-size: 35px;
  color: #00a7a7;
  padding: 10px 15px;
`;

const ModalTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const CloseButton: React.FC<{ close: () => void }> = ({ close }) => (
  <Ionicons
    name="close-circle-outline"
    size={60}
    color="#00a7a7"
    onPress={close}
  />
);

const ModalContent = styled.View`
  flex: 1;
  border: solid 2px gray; /* TODO: remove this border */
  padding: 10px;
`;

export interface IModal {
  isVisible: boolean;
  close: () => void;
}

interface IColorModal extends IModal {
  title: string;
}

const ColorModal: React.FC<IColorModal> = ({
  isVisible,
  close,
  children,
  title,
}) => {
  return (
    <Modal isVisible={isVisible}>
      <ModalTitle>
        <ModalTitleText>{title}</ModalTitleText>
        <CloseButton close={close} />
      </ModalTitle>
      <ModalContent>{children}</ModalContent>
    </Modal>
  );
};

export default ColorModal;
