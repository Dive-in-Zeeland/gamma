import React, { useState } from "react";
import { View, Text, Button} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Progress from "react-native-progress";
import { useAtom } from "jotai";
import tokensAtom, { TokenType } from "store/tokens";
import Modal from "react-native-modal";
import { TouchableOpacity } from "react-native-gesture-handler";

const FreeGiftModal = (props) => {

  return (
    <Modal isVisible={props.isModalVisible}>
    <View style={{ 
      position:'absolute', 
      height: '82%', 
      width: '100%', 
      top:'5%', 
      backgroundColor:'white',
      borderRadius:15
      }}>
      <Text style={{
        position:'absolute',
        zIndex:99,
        fontSize:35,
        fontWeight:'bold',
        color:'#00a7a7',
        top:'3%',
        left:'5%',
      }}>
        Free gift
      </Text>
      <Ionicons
        name="close-circle-outline"
        size={60}
        color="#00a7a7"
        onPress={props.toggleModal}
        style={{
          position:'absolute',
          top:'0.5%',
          left:'80%',
        }}
        />

          <View style={{
            position:'absolute',
            zIndex:99,
            left:'20%',
            top:'27%',
            backgroundColor:'#00a7a7',
            height:'40%',
            width:'60%',
            borderRadius:12,
          }}>
          </View>
          <Text style={{
            position:'absolute',
            zIndex:99,
            left:'20%',
            top:'70%',
            width:'60%',
            textAlign:'center',
            fontWeight:'bold',
            color:'teal'
          }}>
           Show this code to the gift wending machine.
          </Text>

          
    </View>
  </Modal>
  );
};

export default FreeGiftModal;
