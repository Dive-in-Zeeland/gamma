import React from 'react';
import { View, Button, Text } from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons";
import { BarCodeScanner } from "expo-barcode-scanner";
import styles from '../../../styles/toBeRefactored/ScanScreenStyles';



const ScanningView = ({
  isScanned,
  handleBarCodeScanned,
  reset,
  nav,
}) => (
  <View style={styles.main}>
    <View style={styles.home}>
      <View style={styles.qrTarget} />
      <Text style={styles.qrText}>QR Code Target</Text>
      <View style={styles.modalHelper}>
        <Ionicons name="help-circle" size={40} color="white" onPress={() => { nav.navigate("ScanHelpScreen") }} />
      </View>
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={isScanned ? undefined : handleBarCodeScanned}
          style={styles.barcode}
        />
        {isScanned &&
          (
            <View style={styles.scanButton}>
              <Button
                style={{ width: "20%" }}
                title={"Scan again"}
                onPress={() => reset()}
                color="black"
              />
            </View>
          )
        }
      </View>
    </View>
  </View>
)

export default ScanningView;
