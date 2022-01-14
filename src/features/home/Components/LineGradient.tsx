import React, { useState } from "react";
import { View, Text, Button} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Progress from "react-native-progress";
import { useAtom } from "jotai";
import tokensAtom, { TokenType } from "store/tokens";
import Modal from "react-native-modal";
import { TouchableOpacity } from "react-native-gesture-handler";

const LineGradient = (props) => {

  return (
    <View style={{
        position:'absolute',
        zIndex:9,
        height:'100%',
        width:'100%',
    }}>
      <View
        style={{
          position: "absolute",
          zIndex: 9999,
          backgroundColor: "#00e2e2",
          borderRadius: 30,
          left: "70%",
          top: "-1%",
          height: "7%",
          width: "100%",
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View
        style={{
          position: "absolute",
          zIndex: 999,
          backgroundColor: "#00cece",
          borderRadius: 30,
          left: "55.5%",
          top: "-1%",
          height: "7%",
          width: "100%",
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View
        style={{
          position: "absolute",
          zIndex: 99,
          backgroundColor: "#00bbbb",
          borderRadius: 30,
          left: "40%",
          height: "7%",
          width: "100%",
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View
        style={{
          position: "absolute",
          zIndex: 99,
          backgroundColor: "#00a7a7",
          borderRadius: 30,
          left: "40.5%",
          top: "-10%",
          height: "7%",
          width: "100%",
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View
        style={{
          position: "absolute",
          zIndex: 99,
          backgroundColor: "#009494",
          borderRadius: 30,
          left: "41%",
          top: "-20%",
          height: "7%",
          width: "100%",
          transform: [{ rotate: "-45deg" }],
        }}
      />
      
    </View>
  );
};

export default LineGradient;
