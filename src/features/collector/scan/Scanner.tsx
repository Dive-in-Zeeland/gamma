import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { BarCodeScanningResult, Camera } from 'expo-camera';
import { useIsFocused } from '@react-navigation/core';
import Center from 'style/layout/Center';
import { TextM10 } from 'style/typo/Text';
import AbsoluteCenter from '../shared/AbsoluteCenter';
import BorderBox from '../shared/BorderBox';
import Sizer from '../shared/Sizer';
import ColorButton from '../shared/ColorButton';
import Target from './QRTarget.svg';

const MyButtonContainer = styled(AbsoluteCenter)`
  top: auto;
  bottom: 30px;
`;

export interface IScanner {
  onScan: (scanningResult: BarCodeScanningResult) => void;
}

const Scanner: React.FC<IScanner> = ({ onScan }) => {
  // Camera should be updated when screen is opened after its closed
  const isFocused = useIsFocused();

  const [scanned, setScanned] = useState(false);

  // Get camera permission
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  useEffect(() => {
    void (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  if (hasPermission === null)
    return (
      <Center>
        <TextM10>No access to camera</TextM10>
      </Center>
    );

  function handleScan(scanningResult: BarCodeScanningResult) {
    setScanned(true);
    onScan(scanningResult);
  }

  return (
    <BorderBox>
      <AbsoluteCenter>
        <Target height={200} width={200} />
      </AbsoluteCenter>
      {isFocused && (
        <Camera
          onBarCodeScanned={onScan}
          ratio="16:9"
          style={StyleSheet.absoluteFillObject}
        />
      )}
      {scanned && (
        <MyButtonContainer>
          <ColorButton onPress={() => setScanned(false)}>
            Press to try again
          </ColorButton>
        </MyButtonContainer>
      )}
    </BorderBox>
  );
};

export default Scanner;
