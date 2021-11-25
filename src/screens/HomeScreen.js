import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



const HomeScreen = () => (
  <View style={styles.main}>
    <View style={styles.container}>
      <View style={styles.qrSection}>
        <View style={styles.qrContainer}>
          <Text style={{ margin: 20 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
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
    marginLeft: 20,
    marginRight: 20,
  },
  exit: {
    zIndex: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  qrSection: {
    flex: 0.5,
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