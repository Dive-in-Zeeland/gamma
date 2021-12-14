import React from 'react';
import { Button, View, Text } from 'react-native';
import styled from 'styled-components';
import HelperButton from 'src/components/HelperButton';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Body from 'src/components/Body';
import Center from 'src/components/Center';


const MyQrTarget = styled(View)`
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

const MyQrText = styled(Text)`
  position: absolute;
  z-index: 999;
  elevation: 999;
  color: white;
  top: 66%;
  right: 29%;
  font-size: 20px;
  font-weight: bold;
`;

const MyBarcode = styled(BarCodeScanner)`
  width: 90%;
  height: 90%;
  overflow: hidden;
  border-radius: 15px;
  border-color: teal;
  border-width: 4px;
`;

const MyScanButton = styled(View)`
  position: absolute;
  background-color: teal;
  z-index: 9;
  border-radius: 10px;
  top: 80%;
`;

const ScanningView = ({
  isScanned,
  handleBarCodeScanned,
  reset,
  nav,
}) => (

  <Body>

    <MyQrTarget />
    <MyQrText>QR Code Target</MyQrText>
    <HelperButton onPress={() => nav.navigate("ScanHelpScreen")} />

    <Center>

      <MyBarcode onBarCodeScanned={isScanned ? undefined : handleBarCodeScanned} />

      {isScanned && (
        <MyScanButton>
          <Button
            style={{ width: "20%" }}
            title={"Scan again"}
            onPress={() => reset()}
            color="black"
          />
        </MyScanButton>
      )}

    </Center>

  </Body>

);

export default ScanningView;