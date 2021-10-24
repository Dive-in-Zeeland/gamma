import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Sharing } from 'expo';

export default function QrModalScreen( route, navigation) {
  //QR check
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet Scanned');

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }

  useEffect(() => {
    askForCameraPermission()
  }, [])

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
  };

  //Quiz Questions
  const apv =
		{ 
      questionName: 'AH',
      QuestionLocation: 'AH',
      questionText: 'Where is Gondola now?',
		answerOptions: [
			{ answerText: 'Knowhere', isCorrect: false },
			{ answerText: 'Knowhere', isCorrect: false },
			{ answerText: 'GERMANY', isCorrect: true },
			{ answerText: 'Knowhere', isCorrect: false },
	],
  };

	const [showScore, setShowScore] = useState(false);
	const [correct, setCorrect] = useState('');

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setCorrect('Your answer is correct!');
		} else {
      setCorrect('Your answer is incorrect!');
    }
    setShowScore(true);
	};

  //Permission check
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  
  //Scanned incorrect qr code, or scanned qr code that is not inside the data base 
  if (scanned === false || scanned === true && text !== apv.questionName) {
    return (
      <View style={styles.main}>
          <View style={styles.container}>
            <View style={styles.helperContainer}>
              <View style={styles.exit}>
              <Ionicons name='ios-close' size={50} color='teal' onPress={() => {
              route.navigation.goBack(); }}/>
              {/* <Text>{JSON.stringify(location)}</Text> */}
              </View>
            </View>
            <View style={styles.qrSection}> 
                <View style={styles.qrContainer}>
                <View style={styles.barcodebox}>
                <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{ height: 600, width: 600 }} />
                <Text style={styles.maintext}>{text}</Text>
                </View>
                </View>
            </View> 
            <View sttyle={styles.scanButton}>
            {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='teal' />}
            </View> 
          </View>
      </View>
    );
  }


  if (scanned === true && apv.questionName === text) {
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
            <View style={styles.questionContainer}>
              {showScore ? ( <Text>{correct}</Text>
              ) : (
              <View>
                <View>
                  <Text>{apv.questionText}</Text>
                </View>
                <View>
                  {apv.answerOptions.map((answerOption) => (
                  <Button onPress={() => handleAnswerOptionClick(answerOption.isCorrect)} title={answerOption.answerText}></Button>
                  ))}
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

//Styles for the elements of the view
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
      flex: 0.7,
    },
    qrContainer: {
      flex: 1,
      backgroundColor: '#fff',
      borderColor: 'teal',
      alignItems: 'center',
      justifyContent: 'center',
    },
    questionContainer: {
      flex: 1,
      backgroundColor: '#fff',
      margin: 20,
      borderRadius:15,
      borderColor: 'teal',
      borderWidth:2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    maintext: {
      fontSize: 16,
      margin: 20,
      zIndex:50,
    },
    barcodebox: {
      zIndex:25,
      justifyContent: 'center',
      height: 350,
      width: 300,
      overflow: 'hidden',
      borderRadius: 15,
      borderColor: 'teal',
      backgroundColor: 'tomato'
    },
    scanButtonContainer:{   
      borderRadius: 15,
      flex: 0.1,
      margin: 10,
    },
    scanButton:{

    },
});
