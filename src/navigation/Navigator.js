import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import MainTab from "./tabs/MainTab";



const Navigator = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: 'teal' }}>
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  </SafeAreaView>
)

export default Navigator;