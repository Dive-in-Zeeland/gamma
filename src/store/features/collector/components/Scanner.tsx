import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { BarCodeScanningResult, Camera } from 'expo-camera';
import { useIsFocused } from '@react-navigation/core';
import AbsoluteCenter from '../styles/AbsoluteCenter';
import Sizer from '../styles/Sizer';
import Target from '../assets/qr-target.svg';
import ColorText from '../styles/ColorText';

export interface IScanner {
  onScan?: (scanningResult: BarCodeScanningResult) => void;
}

const Scanner: React.FC<IScanner> = ({ onScan }) => {
  const isFocused = useIsFocused();
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  // Get camera permission
  useEffect(() => {
    void (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null)
    return (
      <Sizer center flex={1}>
        <ColorText light bold>
          No access to camera
        </ColorText>
      </Sizer>
    );

  return (
    <Sizer flex={1}>
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
    </Sizer>
  );
};

export default Scanner;
