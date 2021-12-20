import React from 'react';
import { Button, View, Text } from 'react-native';
import styled from 'styled-components/native';
import HelperButton from 'style/interactable/HelperButton';
import { BarCodeScannedCallback, BarCodeScanner } from 'expo-barcode-scanner';
import Body from 'style/layout/Body';
import Center from 'style/layout/Center';

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

export interface ScanningViewProps {
  onHelperPress: () => void;
  onBarCodeScanned: BarCodeScannedCallback;
  onScanAgainPressed: () => void;
  isScanned: boolean;
}

const ScanningView: React.FC<ScanningViewProps> = ({
  onHelperPress,
  onBarCodeScanned,
  onScanAgainPressed,
  isScanned,
}) => (
  <Body>
    <MyQrTarget />
    <MyQrText>QR Code Target</MyQrText>
    <HelperButton onPress={onHelperPress} />

    <Center>
      <MyBarcode onBarCodeScanned={isScanned ? undefined : onBarCodeScanned} />

      {isScanned && (
        <MyScanButton>
          <Button
            title={'Scan again'}
            onPress={onScanAgainPressed}
            color="black"
          />
        </MyScanButton>
      )}
    </Center>
  </Body>
);

export default ScanningView;
