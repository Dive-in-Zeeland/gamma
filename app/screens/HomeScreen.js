import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Platform} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Ionicons from "@expo/vector-icons/Ionicons";
import MapView, {Marker, Callout} from 'react-native-maps';

export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.main}> 
        <View style={styles.home} >  
        <View style={styles.helperContainer}>
          <View style={styles.icon1}>
          </View>
            <View style={styles.icon2}>
              <Ionicons name='ios-warning' size={35} color='teal' onPress={() => {
              navigation.navigate("HelpScreen");
            }}/>
            </View>
        </View>
        <View style={styles.location}> 
                  <View style={styles.container}>
                      <MapView style={styles.map} initialRegion={{
                          latitude: 51.495142,
                          longitude: 3.609632,
                          latitudeDelta: 0.009,
                          longitudeDelta: 0.009,
                      }}> 
                      <Marker coordinate={{
                          latitude: 51.497833,
                          longitude: 3.608876,
                      }}>
                          <Callout onPress={() => {navigation.navigate("streetScreen");}} style={{justifyContent: 'center'}}>
                          <Ionicons name='ios-barcode' size={35} color='teal'/> 
                          </Callout>
                      </Marker>
  
                      <Marker coordinate={{
                          latitude: 51.492899,
                          longitude: 3.607978,
                      }}>
                          <Callout onPress={() => {
                          navigation.navigate("apvScreen");
                          }} style={{justifyContent: 'center'}}>
                              <Ionicons name='ios-barcode' size={35} color='teal'/> 
                          </Callout>
                      </Marker>
  
                      <Marker coordinate={{
                          latitude: 51.495142,
                          longitude: 3.609632,
                      }}>
                          <Callout onPress={() => {
                          navigation.navigate("hzScreen");
                          }} style={{justifyContent: 'center'}}>
                              <Ionicons name='ios-barcode' size={35} color='teal'/> 
                          </Callout>
                      </Marker>
  
                      <Marker coordinate={{
                          latitude: 51.496209,
                          longitude: 3.608172,
                      }}>
                          <Callout onPress={() => {
                          navigation.navigate("ahScreen");
                          }} style={{justifyContent: 'center'}}>
                              <Ionicons name='ios-barcode' size={35} color='teal'/> 
                          </Callout>
                      </Marker>
  
                      </MapView>
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
    home: {
        flex: 1,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 15,
    },
    helperContainer:{
      flex: 0.1,
      flexDirection: "row",
      borderRadius: 15,
      marginTop: 10,
      marginLeft:20,
      marginRight:20,
    },
    icon1:{
      flex:0.50,
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    icon2:{
      flex:0.50,
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
    location:{   
      flex: 0.8,
    },
    info:{   
        borderRadius: 15,
        flex: 0.1,
        margin: 20,
        marginTop: 10,
        backgroundColor: "teal"
    },
    container: {
        flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        height:420,
        borderWidth:2,
        borderColor:'teal',
        width:300,
        borderRadius: 15,
    },
});