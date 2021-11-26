import React from "react";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";

import tokensAtom from '../store/tokens';
import mapPositionAtom from "../store/mapPosition";
import { useAtom } from 'jotai';


const TokenScreen = ({ navigation: nav }) => {

  const [tokens] = useAtom(tokensAtom);
  const [mapPosition, setMapPosition] = useAtom(mapPositionAtom);

  function goToToken(token) {
    console.log('go to token pressed');
    setMapPosition({
      ...mapPosition,
      latitude: token.coords[0],
      longitude: token.coords[1],
    });
    nav.navigate("MapStack");
  }

  return (
    <View style={styles.main}>
      <View style={styles.home}>
        <Text>Overview your tokens</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
        >

          {Object.entries(tokens).map(([tokenName, token], i) => (
            <Pressable onPress={() => goToToken(token)} key={i}>
              <View style={styles.helperContainer}>
                <View style={[styles.icon1, token.isCollected && styles.collectedToken]}>
                  <Text style={{ fontSize: 30, color: "white", margin: 10 }}>
                    {tokenName}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}

        </ScrollView>
      </View>
    </View>
  );
}
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
  collectedToken: {
    backgroundColor: "#7FABAB",
  }
});
