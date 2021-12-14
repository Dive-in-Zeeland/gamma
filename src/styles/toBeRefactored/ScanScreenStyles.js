import { StyleSheet } from 'react-native';


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
  helperContainer: {
    flex: 0.1,
    flexDirection: "row",
    borderRadius: 15,
    marginTop:30,
    marginLeft:30,
    marginRight:30,
  },
  ButtonContainer: {
    flex: 0.1,
    flexDirection: "row",
    borderRadius: 15,
  },
  icon1: {
    flex: 1,
    backgroundColor: "teal",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;