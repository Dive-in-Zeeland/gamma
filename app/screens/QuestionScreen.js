import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Ionicons from "@expo/vector-icons/Ionicons";



/***********************************************************/
/***********************************************************/
/* Questions (there is a TODO with them)
/***********************************************************/



const questions = [
  {
    questionName: "APV",
    QuestionLocation: "APV",
    questionText: "What is the most common fish in around waters in ZEELAND",
    answerOptions: [
      { answerText: "Salmonela", isCorrect: false },
      { answerText: "Carp", isCorrect: false },
      { answerText: "Fluke", isCorrect: true },
      { answerText: "Salmon", isCorrect: false },
    ],
  },
  {
    questionName: "HZ",
    QuestionLocation: "HZ",
    questionText:
      "What is the tasties sea food in ZEELAND according to the articles?",
    answerOptions: [
      { answerText: "Measles", isCorrect: false },
      { answerText: "Musels", isCorrect: true },
      { answerText: "Muscules", isCorrect: false },
      { answerText: "Fish", isCorrect: false },
    ],
  },
  {
    questionName: "AH",
    QuestionLocation: "AH",
    questionText: "Where is Gondola now?",
    answerOptions: [
      { answerText: "Knowhere", isCorrect: false },
      { answerText: "Knowhere", isCorrect: false },
      { answerText: "GERMANY", isCorrect: true },
      { answerText: "Knowhere", isCorrect: false },
    ],
  },
  {
    questionName: "STREET",
    QuestionLocation: "STREET",
    questionText: "HOW WILL ARTIC MELTING ICE AFFECT THE ZEELANDS LAND?",
    answerOptions: [
      { answerText: "It will get flooded.", isCorrect: true },
      { answerText: "Zeelands becomes desert.", isCorrect: false },
      { answerText: "Nothing", isCorrect: false },
      { answerText: "No Smoske for Deyan.", isCorrect: false },
    ],
  },
];



/***********************************************************/
/***********************************************************/
/* Separated React Components
/***********************************************************/



const PermissionScreen = ({
  askForCameraPermission
}) => (
  <View style={styles.container}>

    <Text style={{ margin: 10 }}>
      No access to camera
    </Text>

    <Button
      title={"Allow Camera"}
      onPress={() => askForCameraPermission()}
    />

  </View>
)

const ScanningScreen = ({
  isScanned,
  handleBarCodeScanned,
  reset,
}) => (
  <View style={styles.main}>
    <View style={styles.home}>
      <View style={styles.qrTarget} />
      <Text style={styles.qrText}>QR Code Target</Text>
      <View style={styles.modalHelper}>
        <Ionicons name="help-circle" size={40} color="white" onPress={() => { navigation.navigate("QrHelper") }} />
      </View>
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={isScanned ? undefined : handleBarCodeScanned}
          style={styles.barcode}
        />
        {isScanned &&
          (
            <View style={styles.scanButton}>
              <Button
                style={{ width: "20%" }}
                title={"Scan again"}
                onPress={() => reset()}
                color="black"
              />
            </View>
          )
        }
      </View>
    </View>
  </View>
)

const AfterScanScreen = (props) => (
  <View style={styles.main}>
    <View style={styles.home}>
      <View style={styles.qrSection}>
        <View style={styles.questionContainer}>
          {props.isAnswered
            ?
            <ScoreView {...props} />
            :
            <QuestionView {...props} />
          }
        </View>
      </View>
    </View>
  </View>
)

const ScoreView = ({
  postAnswerMsg,
  reset,
}) => (
  <View>
    <Text>{postAnswerMsg}</Text>
    <Button
      color="#000000"
      onPress={() => reset()}
      title="Back to camera"
    ></Button>
  </View>
)


const QuestionView = ({
  question,
  handleAnswerOptionClick,
  reset,
}) => (
  <View>
    <View style={styles.questionViewTitle}>
      <Text style={styles.questionViewTitleText}>
        {question.questionText}
      </Text>
    </View>
    <View style={styles.questionViewAnswerOptions}>
      {question.answerOptions.map((answerOpt, index) => (
        <Button
          color="#ffffff"
          onPress={() =>
            handleAnswerOptionClick(answerOpt.isCorrect)
          }
          title={answerOpt.answerText}
          key={index}
        />
      ))}
    </View>
    <View style={styles.questionViewCancel}>
      <Text style={styles.questionViewCancelText} onPress={() => reset()}>
        Cancel
      </Text>
    </View>
  </View>
)



/***********************************************************/
/***********************************************************/
/* Main Component (With states and functions)
/***********************************************************/



const questionScreen = () => {

  const [isCameraAllowed, setIsCameraAllowed] = useState(null);
  const [isScanned, setIsScanned] = useState(false);
  const [isScanValid, setIsScanValid] = useState(false);
  const [question, setQuestion] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [postAnswerMsg, setPostAnswerMsg] = useState("Not correct!");


  async function askForCameraPermission() {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setIsCameraAllowed(status === "granted");
  }

  function reset() {
    setIsScanValid(false);
    setIsScanned(false);
    setIsAnswered(false);
  }

  function handleBarCodeScanned({ data: scannedText }) {
    setIsScanned(true);

    const question = questions.find(question =>
      question.questionName === scannedText
    );

    if (question !== undefined) {
      setQuestion(question);
      setIsScanValid(true);
    }
  }

  function handleAnswerOptionClick(isCorrect) {
    if (isCorrect) {
      setPostAnswerMsg("Your answer is correct!");
    } else {
      setPostAnswerMsg("Your answer is incorrect!");
    }
    setIsAnswered(true);
  }


  /* I didnt find a better way 
   * (not to this exact piece but in general, 
   * passing all those props down and down feels wierd)
   */
  const theProps = {
    isAnswered,
    postAnswerMsg,
    reset,
    question,
    handleAnswerOptionClick,
    askForCameraPermission,
    isScanned,
    handleBarCodeScanned,
  }

  useEffect(() => {
    askForCameraPermission();
  });

  if (!isCameraAllowed) {
    return (
      <PermissionScreen {...theProps} />
    );
  }
  else if (!isScanValid) {
    return (
      <ScanningScreen {...theProps} />
    );
  }
  else {
    return (
      <AfterScanScreen {...theProps} />
    );
  }

}

export default questionScreen;



/***********************************************************/
/***********************************************************/
/* Styles (Need to leave this file)
/***********************************************************/



const styles = StyleSheet.create({

  // Question View Start
  questionViewTitle: {
    flex: 0.5,
    borderColor: "teal",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 15,
    borderWidth: 2,
  },
  questionViewTitleText: {
    margin: 10,
    color: "gray"
  },
  questionViewAnswerOptions: {
    flex: 1,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 15,
  },
  questionViewCancel: {
    flex: 0.2,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 15,
  },
  questionViewCancelText: {
    color: "white"
  },
  // Question View End



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
    fontSize: 20,
    fontWeight: "bold",
  },
});
