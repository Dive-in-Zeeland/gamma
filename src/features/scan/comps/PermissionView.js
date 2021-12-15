import React from 'react';
import { Button } from 'react-native';
import Center from 'components/Center';
import { TextM10 } from 'components/Text';

const PermissionView = ({ askForCameraPermission }) => (
  <Center>
    <TextM10>No access to camera</TextM10>
    <Button title="Allow Camera" onPress={askForCameraPermission} />
  </Center>
);

export default PermissionView;
