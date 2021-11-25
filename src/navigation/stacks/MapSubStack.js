import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import MapScreen from "../../screens/MapScreen";



const Stack = createStackNavigator();

const MapSubStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen
      name="MapScreen"
      component={MapScreen}
    />
  </Stack.Navigator>
)

export default MapSubStack;