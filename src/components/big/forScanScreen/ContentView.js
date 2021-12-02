import React from 'react';
import { View, Button, Text } from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons";
import { BarCodeScanner } from "expo-barcode-scanner";
import styles from '../../../styles/toBeRefactored/ScanScreenStyles';



const ContenView = ({
    answerQuestionNow,
    reset,
    scannedToken,
}) => (
  <View style={styles.main}>
    <View style={styles.home}>
        <Text>
            {scannedToken.place}
        </Text>
        <Text>
            {scannedToken.content}
        </Text>
        <Button
                style={{ width: "20%" }}
                title={"Take the Question"}
                onPress={() => answerQuestionNow()}
                color="black"
        />
        <Button
                style={{ width: "20%" }}
                title={"Quit"}
                onPress={() => reset()}
                color="black"
        />
    </View>
  </View>
)

export default ContenView;
