import React, { useEffect, useRef } from 'react';
import MapViewRN, { Marker } from 'react-native-maps';
import styled from 'styled-components/native';
import mapValt from 'store/map';
import tokensValt, { TokenType } from 'store/tokens';
import { useSnapshot } from 'valtio';

const MapView = styled(MapViewRN)`
  height: 100%;
  width: 100%;
`;

// Get only tokens with isCollected = false
const filterNotCollected = (tokens: TokenType[]) =>
  tokens.filter(token => !token.isCollected);

const deltaToBounds = (position: {
  latitude: number;
  latitudeDelta: number;
  longitude: number;
  longitudeDelta: number;
}) => [
  {
    latitude: position.latitude - position.latitudeDelta / 2,
    longitude: position.longitude - position.longitudeDelta / 2,
  },
  {
    latitude: position.latitude + position.latitudeDelta / 2,
    longitude: position.longitude + position.longitudeDelta / 2,
  },
];

const Map = () => {
  const mapSnap = useSnapshot(mapValt);
  const tokensSnap = useSnapshot(tokensValt);
  const mapRef = useRef<MapViewRN>(null);

  // Update map to show current map position from store
  useEffect(() => {
    mapRef.current?.fitToCoordinates(deltaToBounds(mapSnap.position));
  }, [mapSnap, mapSnap.updated]);

  return (
    <MapView ref={mapRef} showsUserLocation initialRegion={mapSnap.position}>
      {filterNotCollected(tokensSnap).map(
        ({ coords: [latitude, longitude], place }) => (
          <Marker
            coordinate={{
              latitude,
              longitude,
            }}
            key={place}
          />
        ),
      )}
    </MapView>
  );
};

export default Map;
