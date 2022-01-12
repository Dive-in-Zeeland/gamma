import React, { useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { getBoundsOfDistance } from 'geolib';
import { useAtom } from 'jotai';
import styled from 'styled-components/native';

import tokensAtom from 'store/tokens';
import mapPositionAtom from 'store/mapPosition';
import HelperButton from 'style/interactable/HelperButton';
import Center from 'style/layout/Center';
import BasicScreen from 'style/layout/BasicScreen';

import { Routes } from 'constants/navigation';
import { MapNavigatorProp } from 'nav/MapNavigator';
import { useNavigation } from '@react-navigation/core';
import BorderedBox from 'style/boxes/BorderedBox';

const MyMap = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const MapScreen = () => {
  const navigation = useNavigation<MapNavigatorProp<Routes.Map>>();
  const [tokens] = useAtom(tokensAtom);
  const [mapPosition] = useAtom(mapPositionAtom);
  const mapRef = useRef<InstanceType<typeof MapView>>(null);

  const filtered = Object.values(tokens).filter(token => !token.isCollected);

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
    <BasicScreen>
      <HelperButton onPress={onHelpPress} />
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
    </BasicScreen>
  );
};

export default MapScreen;
