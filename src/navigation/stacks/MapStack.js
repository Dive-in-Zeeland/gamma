import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from "react";

import MapHelpScreen from 'src/features/map/MapHelpScreen';
import MapSubStack from 'src/navigation/stacks/MapSubStack';

const Stack = createStackNavigator();

const MapStack = () => {

  const navOpts = {
    headerMode: "none",
    mode: "modal",
    screenOptions: {
      ...TransitionPresets.SlideFromRightIOS,
      headerStyle: {
        backgroundColor: "tomato",
      },
    }
  };

  const screens = [
    {
      name: "MapSubStack",
      component: MapSubStack,
    },
    {
      name: "MapHelpScreen",
      component: MapHelpScreen,
      options: {
        headerShown: false,
        headerStyle: {
          backgroundColor: "skyblue",
        },
      }
    }
  ];

  return (
    <Stack.Navigator {...navOpts}>
      {screens.map((screenOpts, i) => (
        <Stack.Screen {...screenOpts} key={i} />
      ))}
    </Stack.Navigator>
  );

};


export default MapStack;



