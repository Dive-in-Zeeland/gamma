import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



const HomeScreen = () => (
  <View style={styles.main}>
    <View style={styles.container}>
        <View style={styles.helperContainer}>
          <View style={styles.icon1}>
            <Text style={{ fontSize: 30, color: "white", margin: 10 }}>
              Dive in Zeeland
            </Text>
          </View>
        </View>
      
      <View style={styles.qrSection}>
        <View style={styles.qrContainer}>
          <Text style={{ margin: 10 }}>
            This is out token collection game called DIZ-GAME. It is an interactive game for children to get to know better the underwater world of Zeeland.
          </Text>
          <Text style={{ margin: 10 }}>
            There are 5 different screens. Home, Token, Map, Camera and Settings.
          </Text>
          <Text style={{ margin: 10 }}>
            In the future this screen will describe the initial game and its rules. And also have a links to Gift code and Played game (But to play this game you must collect all the tokens).
          </Text>
          <Text style={{ margin: 20 }}>
            For best user experience right now, please you IOS devices. They are better optimized.
          </Text>
        </View>
      </View>
        <View style={styles.helperContainer}>
          <View style={styles.icon1}>
            <Text style={{ fontSize: 30, color: "white" }}>
              Free Gift Code
            </Text>
          </View>
        </View>
    </View>
  </View>
);

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "teal",
  },
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 15,
  },
  helperContainer: {
    flex: 0.1,
    flexDirection: "row",
    borderRadius: 15,
    marginTop:40,
    marginLeft:30,
    marginRight:30,
  },
  icon1: {
    flex: 1,
    backgroundColor: "teal",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  exit: {
    zIndex: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  qrSection: {
    flex: 0.7,
  },
  qrContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'teal',
    borderRadius: 15,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 20
  },
});