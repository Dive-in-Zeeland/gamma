import React from "react";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';


import ScanHelpScreen from "../../screens/ScanHelpScreen";
import ScanSubStack from './ScanSubStack';



const Stack = createStackNavigator();

const ScanStack = () => {

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
      name: "ScanSubStack",
      component: ScanSubStack,
    },
    {
      name: "ScanHelpScreen",
      component: ScanHelpScreen,
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
        <Stack.Screen {...screenOpts} key={i}/>
      ))}
    </Stack.Navigator>
  );

}


export default ScanStack;

