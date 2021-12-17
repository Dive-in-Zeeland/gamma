import React, { Ref, useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { getBoundsOfDistance } from 'geolib';
import { useAtom } from 'jotai';
import styled from 'styled-components/native';

import tokensAtom from 'store/tokens';
import mapPositionAtom from 'store/mapPosition';
import HelperButton from 'components/HelperButton';
import Center from 'components/Center';
import Body from 'components/Body';

import { Routes } from 'constants/navigation';
import { MapNavigatorProp } from 'navigation/MapNavigator';
import { useNavigation } from '@react-navigation/core';

const MyMap = styled(MapView)`
  height: 90%;
  width: 90%;
  border-width: 2px;
  border-color: teal;
  border-radius: 15px;
`;

const MapScreen = () => {
  const navigation = useNavigation<MapNavigatorProp<Routes.Map>>();
  const [tokens] = useAtom(tokensAtom);
  const [mapPosition] = useAtom(mapPositionAtom);
  const mapRef = useRef<InstanceType<typeof MapView>>(null);

  const filtered = Object.values(tokens).filter((token) => !token.isCollected);

  function onHelpPress() {
    navigation.navigate(Routes.MapHelp);
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
    <Body>
      <HelperButton onPress={onHelpPress} />
      <Center>
        <MyMap
          ref={mapRef}
          showsUserLocation={true}
          initialRegion={mapPosition}>
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
