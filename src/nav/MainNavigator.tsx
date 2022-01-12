import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import styled, { useTheme } from 'styled-components/native';
import { Routes } from 'constants/navigation';
import { IconsType, ScreensType } from 'types/navigation';
import { TokenScreen, GameScreen, HomeScreen } from 'nav/screens';
import Collector from 'features/collector';
import theme from 'constants/theme';
import MapNavigator from './MapNavigator';

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
  { name: Routes.Scan, component: Collector },
];

const MyIonicons = styled(Ionicons)`
  margin-top: 10px;
`;

const Tab = createBottomTabNavigator<MainNavigatorParamsList>();

export default function MainNavigator() {
  const theme = useTheme();
  const screenSpacing = parseInt(theme.spacing.screenSpace, 10);
  return (
    <Tab.Navigator
      initialRouteName={Routes.Home}
      screenOptions={({ route }) => {
        const icon = ICONS[route.name];

        return {
          tabBarIcon: ({ size, color }) => (
            <MyIonicons name={icon} size={size} color={color} />
          ),
          tabBarActiveTintColor: theme.colors.darker,
          tabBarInactiveTintColor: theme.colors.grayed,
          tabBarStyle: [
            {
              margin: screenSpacing + 10,
              marginBottom: screenSpacing,
              marginTop: 0,
              height: 60,
              borderRadius: 6,
            },
            null,
          ],
          headerShown: false,
        };
      }}
    >
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
