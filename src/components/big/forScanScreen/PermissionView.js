import React from 'react';
import { View, Button, Text } from 'react-native'
import styles from '../../../styles/toBeRefactored/ScanScreenStyles';


const PermissionView = ({
  askForCameraPermission
}) => (
  <View style={styles.container}>

    <Text style={{ margin: 10 }}>
      No access to camera
    </Text>

    <Button
      title={"Allow Camera"}
      onPress={() => askForCameraPermission()}
    />

  </View>
)

export default PermissionView;