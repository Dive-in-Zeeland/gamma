import React, { useState, useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { getBoundsOfDistance } from 'geolib';
import { useAtom } from 'jotai';
import styled from 'styled-components/native';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

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
  const [mapPosition, setMapPosition] = useAtom(mapPositionAtom);
  const mapRef = useRef<InstanceType<typeof MapView>>(null);

  const filtered = Object.values(tokens).filter(token => !token.isCollected);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function centerMap() {
    function getAvg(numbers: number[]) {
      const total = numbers.reduce((acc, c) => acc + c, 0);
      return total / numbers.length;
    }

    const arrayLt: number[] = [];
    const arrayLn: number[] = [];

    Object.values(tokens).forEach(element => {
      arrayLt.push(element.coords[0]);
    });

    Object.values(tokens).forEach(element => {
      arrayLn.push(element.coords[1]);
    });

    setMapPosition({
      ...mapPosition,
      latitude: getAvg(arrayLt),
      longitude: getAvg(arrayLn),
    });
  }

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

      <View
        style={{
          position: 'absolute',
          zIndex: 9999,
          backgroundColor: 'teal',
          borderRadius: 12,
          left: '76%',
          top: '84%',
          height: '11%',
          width: '17%',
        }}
      >
        <HelperButton onPress={toggleModal} />
      </View>

      <View
        style={{
          position: 'absolute',
          zIndex: 9999,
          backgroundColor: 'teal',
          borderRadius: 12,
          left: '57%',
          top: '84%',
          height: '11%',
          width: '17%',
        }}
      >
        <Ionicons
          name="navigate-circle"
          size={50}
          color="white"
          onPress={centerMap}
          style={{ left: '9%', top: '-2%', transform: [{ rotate: '-45deg' }] }}
        />
      </View>

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
