import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MapHelper( route) {

return (
      <View style={styles.main}>
          <View style={styles.container}>
            <View style={styles.qrSection}> 
                <View style={styles.qrContainer}>
                  <View>
                  <Ionicons name="arrow-back" size={40} color="teal"  onPress={() => {route.navigation.goBack()}}/>
                  </View>
                    <Text style={{margin:20}}>
                        MAP HELPER
                    </Text>
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
      zIndex:50,
      flex:1,
      justifyContent: 'center',
      alignItems: 'flex-end'
    }, 
    qrSection:{   
      flex: 0.5,
    },
    qrContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth:3,
      borderColor:'teal',
      borderRadius:15,
      marginLeft:30,
      marginRight:30,
      marginTop:20,
      marginBottom:20
    },
});
