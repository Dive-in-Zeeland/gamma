import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";



const TokenScreen = () => (
  <View style={styles.main}>
    <View style={styles.home}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.helperContainer}>
          <View style={styles.icon1}>
            <Text style={{ fontSize: 30, color: "white", margin: 10 }}>
              TEST ELEMENT
            </Text>
          </View>
        </View>
        <View style={styles.helperContainer}>
          <View style={styles.icon1}>
            <Text style={{ fontSize: 30, color: "white", margin: 10 }}>
              TEST ELEMENT
            </Text>
          </View>
        </View>
        <View style={styles.helperContainer}>
          <View style={styles.icon1}>
            <Text style={{ fontSize: 30, color: "white", margin: 10 }}>
              TEST ELEMENT
            </Text>
          </View>
        </View>
        <View style={styles.helperContainer}>
          <View style={styles.icon1}>
            <Text style={{ fontSize: 30, color: "white", margin: 10 }}>
              TEST ELEMENT
            </Text>
          </View>
        </View>
        <View style={styles.helperContainer}>
          <View style={styles.icon1}>
            <Text style={{ fontSize: 30, color: "white", margin: 10 }}>
              TEST ELEMENT
            </Text>
          </View>
        </View>
        <View style={styles.helperContainer}>
          <View style={styles.icon1}>
            <Text style={{ fontSize: 30, color: "white", margin: 10 }}>
              TEST ELEMENT
            </Text>
          </View>
        </View>
        <View style={styles.helperContainer}>
          <View style={styles.icon1}>
            <Text style={{ fontSize: 30, color: "white", margin: 10 }}>
              TEST ELEMENT
            </Text>
          </View>
        </View>
        <View style={styles.helperContainer}>
          <View style={styles.icon1}>
            <Text style={{ fontSize: 30, color: "white", margin: 10 }}>
              TEST ELEMENT
            </Text>
          </View>
        </View>
        <View style={styles.helperContainer}>
          <View style={styles.icon1}>
            <Text style={{ fontSize: 30, color: "white", margin: 10 }}>
              TEST ELEMENT
            </Text>
          </View>
        </View>
        <View style={styles.helperContainer}>
          <View style={styles.icon1}>
            <Text style={{ fontSize: 30, color: "white", margin: 10 }}>
              TEST ELEMENT
            </Text>
          </View>
        </View>
        <View style={styles.helperContainer}>
          <View style={styles.icon1}>
            <Text style={{ fontSize: 30, color: "white", margin: 10 }}>
              TEST ELEMENT
            </Text>
          </View>
        </View>
        <View style={styles.helperContainer}>
          <View style={styles.icon1}>
            <Text style={{ fontSize: 30, color: "white", margin: 10 }}>
              TEST ELEMENT
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  </View>
);

export default TokenScreen;

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
});
