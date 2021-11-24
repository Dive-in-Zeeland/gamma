/*

WARNING

There is a refactore version of that file (Stars with a Q, not q)
This file is to be deleted (after you guys merge)

*/

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Sharing } from 'expo';
import { questions } from '../store/Questions';

export default function questionScreen({navigation}) {
  /**
   * Variables used inside questions screen
   */
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet Scanned");
  const [correctCode, setCorrectCode] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [correct, setCorrect] = useState("Not correct!");


  /**
   * Function to ask the user if he allows
   * to use the mobile phones camera
   */
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  /**
   * Calling camera permission function
   *  */
  useEffect(() => {
    askForCameraPermission();
  }, []);

  /**
   * IMPORTANT FUNCTION IF YOU DELETE I WILL DELETE YOU, I SEE EVERYTHING I AM THE ULTIMATE TRACKER
   *
   * Made by Daniks
   *
   * Function that resets qr code scanning
   */
  const reset = () => {
    setScanned(false);
    setCorrectCode(false);
    setShowScore(false);
    setText("Not yet Scanned");
  };

  /**
   * Function to assign scanned qr code values
   *
   * @param {*} data Scanned content of the QR code
   */
  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setText(data);
  };

  /**
   * Function that sets score of the quiz
   *
   * @param {*} isCorrect Boolean if the question answear is correct
   */
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setCorrect('Your answer is correct!');
      currentQuestion.collected = true;
      console.log(currentQuestion);
		} else {
      setCorrect('Your answer is incorrect!');
    }
    setShowScore(true);
  };

  //Camera permission checking
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  //TODO rewrite the QR check in different fucntion
  //TODO https://stackoverflow.com/questions/41912313/element-overflow-hidden-in-react-native-android for overflow hidden

  //Scanned incorrect qr code, or scanned qr code that is not inside the data base
  if (scanned === false || (scanned === true && correctCode === false)) {
    /**
     * Checking if QR code is correct and exsists in data base
     * &&
     * Setting the current question
     *
     */
    questions.forEach((element) => {
      if (element.questionName === text) {
        setCurrentQuestion(element);
        setCorrectCode(true);
      }
    });

    return (
      <View style={styles.main}>
        <View style={styles.home}>
          <View style={styles.qrTarget}></View>
          <Text style={styles.qrText}>QR Code Target</Text>
          <View style={styles.modalHelper}>
          <Ionicons name="help-circle" size={40} color="white" onPress={()=>{navigation.navigate("QrHelper")}}/>
          </View>
          <View style={styles.container}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={styles.barcode}
            />
            <View style={styles.scanButton}>
              {/* <Text>RED</Text> */}
              {scanned && (
                <Button
                  style={{ width: "20%" }}
                  title={"Scan again"}
                  onPress={() => reset()}
                  color="black"
                />
              )}
            </View>
          </View>
        </View>
      </View>
    );
  }

  //Quiz screen
  if (scanned === true) {
    return (
      <View style={styles.main}>
        <View style={styles.home}>
          <View style={styles.qrSection}>
            <View style={styles.questionContainer}>
              {showScore ? (
                <View>
                  <Text>{correct}</Text>
                  <Button
                    color="#000000"
                    onPress={() => reset()}
                    title="Back to camera"
                  ></Button>
                </View>
              ) : (
                <View>
                  <View
                    style={{
                      flex: 0.5,
                      borderColor: "teal",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: 10,
                      borderRadius: 15,
                      borderWidth: 2,
                    }}
                  >
                    <Text style={{ margin: 10, color: "gray" }}>
                      {currentQuestion.questionText}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "teal",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: 10,
                      borderRadius: 15,
                    }}
                  >
                    {currentQuestion.answerOptions.map((answerOption) => (
                      <Button
                        color="#ffffff"
                        onPress={() =>
                          handleAnswerOptionClick(answerOption.isCorrect)
                        }
                        title={answerOption.answerText}
                      ></Button>
                    ))}
                  </View>
                  <View
                    style={{
                      flex: 0.2,
                      backgroundColor: "red",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: 10,
                      borderRadius: 15,
                    }}
                  >
                    <Text style={{ color: "white" }} onPress={()=>{reset()}}>
                      Cancel
                    </Text>
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

//TODO Edit the current styles and make the styles global

//Styles for the screen view elements
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "teal",
  },
  home: {
    flex: 1,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 15,
  },
  helperContainer: {
    flex: 0.1,
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
  },
  exit: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  qrSection: {
    flex: 0.9,
  },
  qrContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },
  questionContainer: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  barcode: {
    width: "90%",
    height: "90%",
    overflow: "hidden",
    borderRadius: 15,
    borderColor: "teal",
    borderWidth: 4,
  },
  container: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: "center",
    justifyContent: "center",
  },
  scanButton: {
    position: "absolute",
    backgroundColor: "teal",
    zIndex: 9,
    borderRadius: 10,
    top: "80%",
  },
  modalHelper: {
    position: "absolute",
    zIndex: 99,
    elevation: 99,
    borderRadius: 360,
    top: "7%",
    right: "9%",
  },
  qrTarget: {
    position: "absolute",
    zIndex: 999,
    elevation: 999,
    borderRadius: 15,
    borderColor: "white",
    borderWidth: 4,
    top: "25%",
    right: "20%",
    width: "60%",
    height: "40%",
  },
  qrText: {
    position: "absolute",
    zIndex: 999,
    elevation: 999,
    color: "white",
    top: "66%",
    right: "29%",
    fontSize:20,
    fontWeight:"bold",
  },
});
