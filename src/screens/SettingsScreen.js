import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



const SettingsScreen = () => (
  <View style={styles.main}>
    <View style={styles.home} >
      <Text>
        Setting Screen
      </Text>
    </View>
  </View>
);

export default SettingsScreen;

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
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  icon1: {
    flex: 0.50,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  icon2: {
    flex: 0.50,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  location: {
    flex: 0.8,
  },
  info: {
    borderRadius: 15,
    flex: 0.1,
    margin: 20,
    marginTop: 10,
    backgroundColor: "teal"
  },
  container: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: 420,
    borderWidth: 2,
    borderColor: 'teal',
    width: 300,
    borderRadius: 15,
  },
});