import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import HelperButton from 'style/interactable/HelperButton';
import Body from 'style/layout/Body';
import BorderedBox from 'style/boxes/BorderedBox';
import Button from 'style/interactable/Button';
import AbsoluteCenter from 'style/layout/AbsoluteCenter';
import { StyleSheet, View } from 'react-native';
import { BarCodeScanningResult, Camera } from 'expo-camera';
import { useIsFocused } from '@react-navigation/core';
import Center from 'style/layout/Center';
import { TextM10 } from 'style/typo/Text';

const MyScanTarget = styled.View`
  border-radius: 15px;
  border-color: white;
  border-width: 4px;
  width: 60%;
  height: 40%;
`;

const MyScanText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const MyButtonContainer = styled(AbsoluteCenter)`
  top: auto;
  bottom: 30px;
`;

export interface ScanningViewProps {
  onHelperPress: () => void;
  onBarCodeScanned:
    | ((scanningResult: BarCodeScanningResult) => void)
    | undefined;
  onScanAgainPressed: () => void;
  isScanned: boolean;
}

const ScanningView: React.FC<ScanningViewProps> = ({
  onHelperPress,
  onBarCodeScanned,
  onScanAgainPressed,
  isScanned,
}) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    void (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  return (
    <Body>
      {hasPermission ? (
        <BorderedBox>
          <HelperButton onPress={onHelperPress} />
          <AbsoluteCenter>
            <MyScanTarget />
            <MyScanText>SCAN QR CODE</MyScanText>
          </AbsoluteCenter>
          {isFocused && (
            <Camera
              onBarCodeScanned={isScanned ? undefined : onBarCodeScanned}
              ratio="16:9"
              style={StyleSheet.absoluteFillObject}
            />
          )}
          {isScanned && (
            <MyButtonContainer>
              <Button onPress={onScanAgainPressed}>Scan Again</Button>
            </MyButtonContainer>
          )}
        </BorderedBox>
      ) : (
        <Center>
          <TextM10>No access to camera</TextM10>
        </Center>
      )}
    </Body>
  );
};

export default ScanningView;
