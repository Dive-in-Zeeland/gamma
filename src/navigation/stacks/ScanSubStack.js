import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import ScanScreen from "../../screens/ScanScreen";



const Stack = createStackNavigator();

const ScanSubStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen
      name="ScanScreen"
      component={ScanScreen}
    />
  </Stack.Navigator>
)

export default ScanSubStack;