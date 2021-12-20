import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import HelperButton from 'style/interactable/HelperButton';
import Body from 'style/layout/Body';
import BorderedBox from 'style/boxes/BorderedBox';
import Button from 'style/interactable/Button';
import AbsoluteCenter from 'style/layout/AbsoluteCenter';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanningResult, Camera } from 'expo-camera';

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

  useEffect(() => {
    void (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Body>
      <BorderedBox>
        <HelperButton onPress={onHelperPress} />
        <AbsoluteCenter>
          <MyScanTarget />
          <MyScanText>SCAN QR CODE</MyScanText>
        </AbsoluteCenter>
        <Camera
          onBarCodeScanned={isScanned ? undefined : onBarCodeScanned}
          ratio="16:9"
          style={StyleSheet.absoluteFillObject}
        />
        {isScanned && (
          <MyButtonContainer>
            <Button onPress={onScanAgainPressed}>Scan Again</Button>
          </MyButtonContainer>
        )}
      </BorderedBox>
    </Body>
  );
};

export default ScanningView;
