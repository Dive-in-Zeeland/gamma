import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Platform} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function QrModalScreen(route) {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet Scanned')

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }

  useEffect(() => {
    askForCameraPermission()
  }, [])

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    console.log('Type: ' + type + '\nData: ' + data)
  };

  //Permission check
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }


  return (
    <View style={styles.main}>
        <View style={styles.home}>
        <View style={styles.helperContainer}>
          <View style={styles.icon2}>
            <Ionicons name='ios-close' size={35} color='teal' onPress={() => {
          route.navigation.goBack();
        }}/>
          </View>
      </View>
        <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 600, width: 600 }} />
        </View>
        <Text style={styles.maintext}>{text}</Text>
        {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor:"teal",
    },
    home: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 15,
    },
    maintext: {
        fontSize: 16,
        margin: 20,
    },
    barcodebox: {
        borderRadius:15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        backgroundColor: 'tomato'
    },
});
