import React from 'react';
import { Image } from 'react-native';
import ColorModal, { IModal } from 'components/ColorModal';

const MapModal: React.FC<IModal> = ({ isVisible, close }) => {
  return (
    <ColorModal isVisible={isVisible} close={close} title="Map Helper">
      <Image style={{position:'absolute', left:'-2%', top:'5%', height: '100%', width: '110%',}} source={require('../../../../img/Map.png')}/>
    </ColorModal>
  );
};

export default MapModal;
