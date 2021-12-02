import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

const GameScreen = ({ navigation: nav }) => {
    return (
        <View style={styles.main}>
        <View style={styles.home}>
            <WebView
            style={styles.container}
            source={{ uri: "https://puginarug.com/" }}
            />
        </View>
        </View>
    );
};
export default GameScreen;

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
    borderRadius: 15,
    margin: 10,
  },
  icon1: {
    flex: 1,
    backgroundColor: "teal",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  location: {
    flex: 0.8,
  },
  info: {
    borderRadius: 15,
    flex: 0.1,
    margin: 20,
    marginTop: 10,
    backgroundColor: "teal",
  },
  container: {
    flex: 1,
    // backgroundColor: 'red',
    borderRadius: 15,
    margin: 10,
    borderWidth:2,
    borderColor:"teal",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    height: 420,
    borderWidth: 2,
    borderColor: "teal",
    width: 300,
    borderRadius: 15,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  collectedToken: {
    backgroundColor: "#7FABAB",
  },
});
