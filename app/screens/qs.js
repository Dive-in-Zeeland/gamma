async function askForCameraPermission() {
  const { status } = await BarCodeScanner.requestPermissionsAsync();
  setHasPermission(status === "granted");
}




const PermissionScreen = (
  <View style={styles.container}>
    <Text style={{ margin: 10 }}>No access to camera</Text>
    <Button
      title={"Allow Camera"}
      onPress={() => askForCameraPermission()}
    />
  </View>
)

const ScanningScreen = (
  <View style={styles.main}>
    <View style={styles.home}>
      <View style={styles.qrTarget}></View>
      <Text style={styles.qrText}>QR Code Target</Text>
      <View style={styles.modalHelper}>
        <Ionicons name="help-circle" size={40} color="white" onPress={() => { navigation.navigate("QrHelper") }} />
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
)

const ScannedScreen = (
  <View style={styles.main}>
    <View style={styles.home}>
      <View style={styles.qrSection}>
        <View style={styles.questionContainer}>
          {showScore ? ScoreView : QuestionView}
        </View>
      </View>
    </View>
  </View>
)

const ScoreView = (
  <View>
    <Text>{correct}</Text>
    <Button
      color="#000000"
      onPress={() => reset()}
      title="Back to camera"
    ></Button>
  </View>
)

const QuestionView = (
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
      <Text style={{ color: "white" }} onPress={() => { reset() }}>
        Cancel
      </Text>
    </View>
  </View>
)

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
    fontSize: 20,
    fontWeight: "bold",
  },
});
