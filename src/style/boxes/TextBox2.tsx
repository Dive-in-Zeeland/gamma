import React from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native'
import { template } from '@babel/core';
import MapView, { Marker } from 'react-native-maps';

const Pressable = styled.Pressable`
  margin-bottom: 10px;
`;

// prev: Icon1
const Box = styled.View`
  background-color: teal;
  border-radius: 10px;
  height: 100px;
`;

const DaText = styled.Text`
  font-size: 30px;
  color: white;
`;

export interface TextBoxProps {
  onPress?: () => void;
}

const TextBox2: React.FC<TextBoxProps> = ({ children, onPress = undefined, tokenName, cord1, cord2}) => (
  <Pressable onPress={onPress}>
    <View style={{
      backgroundColor: 'white',
      borderRadius: 15,
      borderColor: "teal",
      borderWidth: 3,
      height:100,
    }}>
      <Text style={{
        fontSize: 40,
        color: '#006767',
        marginTop: 35,
        marginLeft: 9,
      }}>
        {tokenName}
      </Text>
      <View style={{
        position: 'absolute',
        zIndex: 9999,
        right: 0,
        height:"100%",
        width:"35%",
      }}>
        <MapView style={{
          height:'101%', 
          width:'101%',
          borderColor: 'teal',
          borderRadius: 15,
          borderWidth:3,}}
          
          initialRegion={{
            latitude: cord1,
            longitude: cord2,
            latitudeDelta: 0.005,
            longitudeDelta:0.005,
          }}

          >
            <Marker
              coordinate={{ latitude : cord1 , longitude : cord2 }}
              
            />
        </MapView>
      </View>
      <View style={{
        position: "absolute",
        zIndex: 999,
        top: 0,
        borderRadius: 10,
        backgroundColor: 'teal',
        height: "30%",
        width: "100%",
      }}>
        <Text style={{
          fontSize:20,
          color: "white",
          marginLeft: 10,
          marginTop: 2,
        }}>
          Collectable token
        </Text>
      </View>
    </View>
  </Pressable>
);

export default TextBox2;
