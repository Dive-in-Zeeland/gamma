import React from 'react';
import ColorModal, { IModal } from 'components/ColorModal';
import styled from 'styled-components/native';

const GiftCode = styled.View`
  position: absolute;
  z-index: 99;
  left: 20%;
  top: 27%;
  background-color: #4362c5;
  height: 40%;
  width: 60%;
`;

const Caption = styled.Text`
  position: absolute;
  z-index: 99;
  left: 20%;
  top: 70%;
  width: 60%;
  color: #1e2e61;
  text-align: center;
  font-weight: bold;
`;

const FreeGiftModal: React.FC<IModal> = ({ isVisible, close }) => {
  return (
    <ColorModal isVisible={isVisible} close={close} title="Free Gift">


      <GiftCode />
      <Caption>Show this code to the gift wending machine.</Caption>
    
    </ColorModal>
  );
};

export default FreeGiftModal;
