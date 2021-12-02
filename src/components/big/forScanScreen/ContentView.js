import React from "react";
import { View, Button, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../../../styles/toBeRefactored/ScanScreenStyles";

const ContenView = ({ answerQuestionNow, reset, scannedToken }) => (
  <View style={styles.main}>
    <View style={styles.home}>
      <View style={styles.helperContainer}>
        <View style={styles.icon1}>
          <Text style={{ fontSize: 30, color: "white"}}>
            {scannedToken.place}
          </Text>
        </View>
      </View>
      <View style={styles.qrSection}>
        <View style={styles.qrContainer}>
          <Text style={{ margin: 10 }}>{scannedToken.content}</Text>
        </View>
        <View style={styles.ButtonContainer}>
            <View style={styles.icon1}>
              <Text style={{ fontSize: 30, color: "white"}} onPress={()=>{reset();}}>
                Quit
              </Text>
            </View>
            <View style={styles.icon1} >
              <Text style={{ fontSize: 30, color: "white"}} onPress={()=>{answerQuestionNow();}}>
                Question
              </Text>
            </View>
        </View>
        </View>
      </View>
    </View>
);

export default ContenView;
