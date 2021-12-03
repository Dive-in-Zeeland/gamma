import React from 'react';
import { Button, Text } from 'react-native'
import {
  Container
} from './styled'


const PermissionView = ({
  askForCameraPermission
}) => (
  <Container>

    <Text style={{ margin: 10 }}>
      No access to camera
    </Text>

    <Button
      title={"Allow Camera"}
      onPress={() => askForCameraPermission()}
    />

  </Container>
)

export default PermissionView;