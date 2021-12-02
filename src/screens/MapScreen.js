import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import MapView, { Marker } from 'react-native-maps';
import tokensAtom from '../store/tokens';
import mapPositionAtom from '../store/mapPosition';
import { useAtom } from 'jotai';
import { getBoundsOfDistance } from 'geolib';



const Map = styled(MapView)`
  height: 90%;
  width: 90%;
  border-width: 2px;
  border-color: teal;
  border-radius: 15px;
`;



const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;



const Location = styled(View)`
  flex: 1;
`;



const ModalHelper = styled(View)`
  position: absolute;
  z-index: 9;
  elevation: 9;
  /* box-shadow: 9px 9px 9px rgba(0, 0, 0, 0.3); */
  border-radius: 360px;
  top: 7%;
  left: 9%;
`;



const Home = styled(View)`
  flex: 1;
  margin: 10px;
  background-color: white;
  border-radius: 15px;
`;



const Main = styled(View)`
  flex: 1;
  background-color: teal;
`;



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