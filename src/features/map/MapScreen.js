import React, { useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { getBoundsOfDistance } from 'geolib';
import { useAtom } from 'jotai';
import styled from 'styled-components';

import tokensAtom from 'src/store/tokens';
import mapPositionAtom from 'src/store/mapPosition';
import HelperButton from 'src/components/HelperButton';
import Center from 'src/components/Center';
import Body from 'src/components/Body';

const MyMap = styled(MapView)`
  height: 90%;
  width: 90%;
  border-width: 2px;
  border-color: teal;
  border-radius: 15px;
`;

const MapScreen = ({ navigation: nav }) => {

  const [tokens] = useAtom(tokensAtom);
  const [mapPosition] = useAtom(mapPositionAtom);
  const mapRef = useRef(null);

  const filtered = Object.values(tokens).filter(token => !token.isCollected);

  function onHelpPress() {
    nav.navigate("MapHelpScreen");
  }

  useEffect(() => {
    if (!mapRef) return;
    const coords = getBoundsOfDistance({ latitude: mapPosition.latitude, longitude: mapPosition.longitude }, 130);
    mapRef.current.fitToCoordinates(coords);
  }, [mapPosition]);

  return (
    <Body>
      <HelperButton
        onPress={onHelpPress}
      />
      <Center>
        <MyMap ref={mapRef} showsUserLocation={true} initialRegion={mapPosition}>
          {filtered.map(({ coords: [latitude, longitude] }, index) => (
            <Marker
              coordinate={{
                latitude: latitude,
                longitude: longitude,
              }}
              key={index}
            />
          ))}
        </MyMap>
      </Center>
    </Body>
  );
};

export default MapScreen;