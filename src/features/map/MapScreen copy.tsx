import React, { useState, useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { getBoundsOfDistance } from 'geolib';
import { useAtom } from 'jotai';
import styled from 'styled-components/native';
import { View } from 'react-native';

import tokensAtom from 'store/tokens';
import mapPositionAtom from 'store/mapPosition';
import HelperButton from 'style/interactable/HelperButton';
import Center from 'style/layout/Center';

import BorderedBox from 'style/boxes/BorderedBox';

import MapModal from 'features/map/components/MapModal';

const MyMap = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const MapScreen = () => {
  const [tokens] = useAtom(tokensAtom);
  const [mapPosition] = useAtom(mapPositionAtom);
  const mapRef = useRef<InstanceType<typeof MapView>>(null);

  const filtered = Object.values(tokens).filter(token => !token.isCollected);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    if (mapRef.current === null) return;
    const coords = getBoundsOfDistance(
      { latitude: mapPosition.latitude, longitude: mapPosition.longitude },
      130,
    );
    mapRef.current.fitToCoordinates(coords);
  }, [mapPosition]);

  return (
    <View style={{ flex: 1, backgroundColor: 'teal' }}>
      <MapModal isModalVisible={isModalVisible} toggleModal={toggleModal} />
      <HelperButton onPress={toggleModal} />
      <View
        style={{
          position: 'absolute',
          zIndex: 9999,
          backgroundColor: 'teal',
          height: '10%',
          width: '10%',
        }}
      />
      <Center>
        <BorderedBox>
          <MyMap ref={mapRef} showsUserLocation initialRegion={mapPosition}>
            {filtered.map(({ coords: [latitude, longitude] }, index) => (
              <Marker
                coordinate={{
                  latitude,
                  longitude,
                }}
                key={index}
              />
            ))}
          </MyMap>
        </BorderedBox>
      </Center>
    </View>
  );
};

export default MapScreen;
