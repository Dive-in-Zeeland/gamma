import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import TokenScreen from "../../screens/TokenScreen";
import MapStack from "../stacks/MapStack";
import HomeScreen from "../../screens/HomeScreen";
import ScanStack from "../stacks/ScanStack";
import SettingsScreen from "../../screens/SettingsScreen";



const Tab = createBottomTabNavigator();

const MainTab = () => {

  function configureIcons(route, color) {
    const icons = {
      'TokenScreen': 'grid',
      'MapStack': 'map',
      'HomeScreen': 'ios-home',
      'ScanStack': 'aperture',
      'SettingsScreen': 'settings',
    }
    const opts = {
      name: icons[route.name] ?? '',
      size: 30,
      color: color,
      style: { marginTop: 10 }
    }
    return <Ionicons {...opts} />;
  }

  const navOpts = {
    initialRouteName: "Home",
    screenOptions: ({route}) => ({
      tabBarIcon: ({ color }) => configureIcons(route, color)
    }),
    tabBarOptions: {
      activeTintColor: 'teal',
      inactiveTintColor: 'grey',
      style: {
        flex: 0.10,
        margin: 10,
        borderRadius: 15,
      }
    }
  };

  const screens = [
    {
      name: "TokenScreen",
      options: { tabBarLabel: '' },
      component: TokenScreen,
    },

    {
      name: "MapStack",
      options: { tabBarLabel: '' },
      component: MapStack,
    },

    {
      name: "HomeScreen",
      options: { tabBarLabel: '' },
      component: HomeScreen,
    },

    {
      name: "ScanStack",
      options: { tabBarLabel: '' },
      component: ScanStack,
    },

    {
      name: "SettingsScreen",
      options: { tabBarLabel: '' },
      component: SettingsScreen,
    },

  ]

  return (
    <Tab.Navigator {...navOpts}>
      {screens.map((screenOpts, i) => (
        <Tab.Screen {...screenOpts} key={i}/>
      ))}
    </Tab.Navigator>
  );

}

export default MainTab;