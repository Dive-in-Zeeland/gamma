import React, { FC, useEffect } from 'react';
import { Button } from 'react-native';
import Center from 'components/Center';
import { TextM10 } from 'components/Text';
import { BarCodeScanner } from 'expo-barcode-scanner';

export interface PermissionViewProps {
  onAllowed: () => void;
}

const PermissionView: FC<PermissionViewProps> = ({ onAllowed }) => {
  async function askForCameraPermission() {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    if (status === 'granted') onAllowed();
  }

  useEffect(() => {
    void askForCameraPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Center>
      <TextM10>No access to camera</TextM10>
      <Button title="Allow Camera" onPress={askForCameraPermission} />
    </Center>
  );
};

export default PermissionView;
