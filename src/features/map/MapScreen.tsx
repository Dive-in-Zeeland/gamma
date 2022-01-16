import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import MapModal from 'features/map/components/MapModal';
import mapValt from 'store/map';
import TitledScreen from 'features/collector/styles/TitledScreen';
import ColorBox from 'features/collector/styles/ColorBox';
import Map from './components/Map';
import Positioner from './style/Positioner';

const Buttons: React.FC<{
  onNavPressed: () => void;
  onInfoPressed: () => void;
}> = ({ onNavPressed, onInfoPressed }) => (
  <Positioner right="20px" bottom="20px" p="" row>
    <ColorBox br="12px" center w="60px" h="75px" m="0 10px 0 0">
      <Ionicons
        name="information-circle"
        size={45}
        color="white"
        onPress={onInfoPressed}
      />
    </ColorBox>
    <ColorBox br="12px" center w="60px" h="75px">
      <Ionicons name="locate" size={45} color="white" onPress={onNavPressed} />
    </ColorBox>
  </Positioner>
);

const MapScreen = () => {
  const [helpVisible, setHelpVisible] = useState(false);

  return (
    <TitledScreen
      title="Lost?"
      subtitle="Find here where the next token is!"
      nobox
    >
      <ColorBox br="20px" flex={1}>
        <Map />
        <Buttons
          onNavPressed={() => mapValt.setPositionDefault()}
          onInfoPressed={() => setHelpVisible(true)}
        />
      </ColorBox>
      <MapModal isVisible={helpVisible} close={() => setHelpVisible(false)} />
    </TitledScreen>
  );
};

export default MapScreen;
