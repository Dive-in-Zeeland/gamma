import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import TokenScreen from 'features/tokens/TokenScreen';
import HomeScreen from 'features/home/HomeScreen';
import GameScreen from 'features/game/GameScreen';

import MapStack from 'navigation/stacks/MapStack';
import ScanStack from 'navigation/stacks/ScanStack';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  function configureIcons(route, color) {
    const icons = {
      GameScreen: 'play-circle',
      TokenScreen: 'grid',
      MapStack: 'map',
      HomeScreen: 'ios-home',
      ScanStack: 'aperture',
      SettingsScreen: 'settings',
    };
    const opts = {
      name: icons[route.name] ?? '',
      size: 30,
      color: color,
      style: { marginTop: 10 },
    };
    return <Ionicons {...opts} />;
  }

  const navOpts = {
    initialRouteName: 'HomeScreen',
    screenOptions: ({ route }) => ({
      tabBarIcon: ({ color }) => configureIcons(route, color),
    }),
    tabBarOptions: {
      activeTintColor: 'teal',
      inactiveTintColor: 'grey',
      style: {
        flex: 0.1,
        margin: 10,
        borderRadius: 15,
      },
    },
  };

  const screens = [
    {
      name: 'GameScreen',
      options: { tabBarLabel: '' },
      component: GameScreen,
    },
    {
      name: 'TokenScreen',
      options: { tabBarLabel: '' },
      component: TokenScreen,
    },

    {
      name: 'HomeScreen',
      options: { tabBarLabel: '' },
      component: HomeScreen,
    },

    {
      name: 'MapStack',
      options: { tabBarLabel: '' },
      component: MapStack,
    },

    {
      name: 'ScanStack',
      options: { tabBarLabel: '' },
      component: ScanStack,
    },
  ];

  return (
    <Tab.Navigator {...navOpts}>
      {screens.map((screenOpts, i) => (
        <Tab.Screen {...screenOpts} key={i} />
      ))}
    </Tab.Navigator>
  );
};

export default MainTab;
