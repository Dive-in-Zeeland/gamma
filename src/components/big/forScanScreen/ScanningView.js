import React from 'react';
import styled from "styled-components";
import { View, Button, Text } from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons";
import { BarCodeScanner } from "expo-barcode-scanner";



const ScanButton = styled(View)`
  position: absolute;
  background-color: teal;
  z-index: 9;
  border-radius: 10px;
  top: 80%;
`;



const Barcode = styled(BarCodeScanner)`
  width: 90%;
  height: 90%;
  overflow: hidden;
  border-radius: 15px;
  border-color: teal;
  border-width: 4px;
`;



const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;



const ModalHelper = styled(View)`
  position: absolute;
  z-index: 99;
  elevation: 99;
  border-radius: 360px;
  top: 7%;
  right: 9%;
`;



const QrText = styled(Text)`
  position: absolute;
  z-index: 999;
  elevation: 999;
  color: white;
  top: 66%;
  right: 29%;
  font-size: 20px;
  font-weight: bold;
`;



const QrTarget = styled(View)`
  position: absolute;
  z-index: 999;
  elevation: 999;
  border-radius: 15px;
  border-color: white;
  border-width: 4px;
  top: 25%;
  right: 20%;
  width: 60%;
  height: 40%;
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



const ScanningView = ({
  isScanned,
  handleBarCodeScanned,
  reset,
  nav,
}) => (
  <Main>
    <Home>
      <QrTarget />
      <QrText>QR Code Target</QrText>
      <ModalHelper>
        <Ionicons name="help-circle" size={40} color="white" onPress={() => { nav.navigate("ScanHelpScreen") }} />
      </ModalHelper>
      <Container>
        <Barcode onBarCodeScanned={isScanned ? undefined : handleBarCodeScanned} />
        {isScanned &&
          (
            <ScanButton>
              <Button
                style={{ width: "20%" }}
                title={"Scan again"}
                onPress={() => reset()}
                color="black"
              />
            </ScanButton>
          )
        }
      </Container>
    </Home>
  </Main>
)

export default ScanningView;

import { StyleSheet } from 'react-native'