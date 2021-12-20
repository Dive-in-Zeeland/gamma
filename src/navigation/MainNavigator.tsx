import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { Routes } from 'constants/navigation';
import { IconsType, ScreensType } from 'types/navigation';
import {
  TokenScreen,
  GameScreen,
  HomeScreen,
  MapNavigator,
  ScanNavigator,
} from 'navigation/screens';

export type MainNavigatorParamsList = {
  [Routes.Game]: undefined;
  [Routes.Token]: undefined;
  [Routes.Home]: undefined;
  [Routes.Map]: undefined;
  [Routes.Scan]: undefined;
};

export type MainNavigatorProp<RouteName extends keyof MainNavigatorParamsList> =
  BottomTabNavigationProp<MainNavigatorParamsList, RouteName>;

const ICONS: IconsType<MainNavigatorParamsList> = {
  Game: 'play-circle',
  Token: 'grid',
  Home: 'ios-home',
  Map: 'map',
  Scan: 'aperture',
};

const SCREENS: ScreensType<MainNavigatorParamsList> = [
  { name: Routes.Game, component: GameScreen },
  { name: Routes.Token, component: TokenScreen },
  { name: Routes.Home, component: HomeScreen },
  { name: Routes.Map, component: MapNavigator },
  { name: Routes.Scan, component: ScanNavigator },
];

const MyIonicons = styled(Ionicons)`
  margin-top: 10px;
`;

const Tab = createBottomTabNavigator<MainNavigatorParamsList>();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={Routes.Home}
      screenOptions={({ route }) => {
        const icon = ICONS[route.name];

        return {
          tabBarIcon: ({ size, color }) => (
            <MyIonicons name={icon} size={size} color={color} />
          ),
        };
      }}
      tabBarOptions={{
        activeTintColor: 'teal',
        inactiveTintColor: 'grey',
        style: {
          flex: 0.1,
          margin: 10,
          borderRadius: 15,
        },
      }}>
      {SCREENS.map(({ name, component }, i) => (
        <Tab.Screen
          key={i}
          name={name}
          component={component}
          options={{ tabBarLabel: '' }}
        />
      ))}
    </Tab.Navigator>
  );
}
