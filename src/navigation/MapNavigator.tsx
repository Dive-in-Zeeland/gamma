import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
  StackNavigationProp,
} from '@react-navigation/stack';
import { MapScreen, MapHelpScreen } from 'navigation/screens';
import { Routes } from 'constants/navigation';
import { ScreensType } from 'types/navigation';

export type MapNavigatorParamsList = {
  [Routes.Map]: undefined;
  [Routes.MapHelp]: undefined;
};

export type MapNavigatorProp<RouteName extends keyof MapNavigatorParamsList> =
  StackNavigationProp<MapNavigatorParamsList, RouteName>;

const SCREENS: ScreensType<MapNavigatorParamsList> = [
  { name: Routes.Map, component: MapScreen },
  { name: Routes.MapHelp, component: MapHelpScreen },
];

const MapStack = createStackNavigator<MapNavigatorParamsList>();

export default function MapNavigator() {
  return (
    <MapStack.Navigator
      headerMode="none"
      mode="modal"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerStyle: { backgroundColor: 'tomato' },
      }}>
      {SCREENS.map(({ name, component }, i) => (
        <MapStack.Screen key={i} name={name} component={component} />
      ))}
    </MapStack.Navigator>
  );
}
