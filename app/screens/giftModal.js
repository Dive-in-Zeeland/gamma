import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Ionicons from "@expo/vector-icons/Ionicons";


export default function QrModalScreen( route) {

return (
      <View style={styles.main}>
          <View style={styles.container}>
            <View style={styles.helperContainer}>
              <View style={styles.exit}>
              <Ionicons name='ios-close' size={50} color='teal' onPress={() => {
              route.navigation.goBack(); }}/>
              </View>
            </View>
            <View style={styles.qrSection}> 
                <View style={styles.qrContainer}>
                  <Image source={require('../../assets/img/qrCode.gif')} />
                  <Text style={{color:'white'}}>GIFT CODE FOR YOU</Text>
                </View>
            </View> 
          </View>
      </View>
);
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor:"teal",
    },
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 15,
    },
    helperContainer:{
      flex: 0.1,
      flexDirection: "row",
      marginLeft:20,
      marginRight:20,
    },
    exit:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'flex-end'
    }, 
    qrSection:{   
      flex: 1,
    },
    qrContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'teal',
      margin: 30,
      borderColor:'teal',
      borderWidth:3,
      borderRadius:15,
    },
});
