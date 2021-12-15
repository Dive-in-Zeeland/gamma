import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import MapScreen from 'features/map/MapScreen';

const Stack = createStackNavigator();

const MapSubStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="MapScreen" component={MapScreen} />
  </Stack.Navigator>
);

export default MapSubStack;
