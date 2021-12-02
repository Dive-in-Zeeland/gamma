import React from 'react';
import styled from "styled-components";
import { View, Button, Text } from 'react-native'


const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;


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

import { StyleSheet } from 'react-native'