import React, { useEffect, useRef } from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Marker } from 'react-native-maps';
import tokensAtom from '../../../store/tokens';
import mapPositionAtom from '../../../store/mapPosition';
import { useAtom } from 'jotai';
import { getBoundsOfDistance } from 'geolib';
import {
  Map,
  Container,
  Location,
  ModalHelper,
  Home,
  Main,
} from '../components/styled'


const MapScreen = ({ navigation: nav }) => {

  const [tokens] = useAtom(tokensAtom);
  const [mapPosition] = useAtom(mapPositionAtom);
  const mapRef = useRef(null);

  const filtered = Object.values(tokens).filter(token => !token.isCollected);

  function onHelpPress() {
    nav.navigate("MapHelpScreen")
  }

  useEffect(() => {
    if (!mapRef) return;
    console.log(mapRef.current);
    const coords = getBoundsOfDistance({ latitude: mapPosition.latitude, longitude: mapPosition.longitude }, 130);
    mapRef.current.fitToCoordinates(coords);
  }, [mapPosition]);

  return (
    (<Main>
      <Home>
        <ModalHelper>
          <Ionicons
            name="help-circle"
            size={40}
            color="teal"
            onPress={onHelpPress}
          />
        </ModalHelper>
        <Location>
          <Container>
            <Map ref={mapRef} showsUserLocation={true} initialRegion={mapPosition}>
              {filtered.map(({ coords: [latitude, longitude] }, index) => (
                <Marker
                  coordinate={{
                    latitude: latitude,
                    longitude: longitude,
                  }}
                  key={index}
                />
              ))}
            </Map>
          </Container>
        </Location>
      </Home>
    </Main>)
  );
}

export default MapScreen;