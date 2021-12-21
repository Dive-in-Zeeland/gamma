import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
  StackNavigationProp,
} from '@react-navigation/stack';
import { ScanScreen, ScanHelpScreen } from 'nav/screens';
import { Routes } from 'constants/navigation';
import { ScreensType } from 'types/navigation';

export type ScanNavigatorParamsList = {
  [Routes.Scan]: undefined;
  [Routes.ScanHelp]: undefined;
};

export type ScanNavigatorProp<RouteName extends keyof ScanNavigatorParamsList> =
  StackNavigationProp<ScanNavigatorParamsList, RouteName>;

const SCREENS: ScreensType<ScanNavigatorParamsList> = [
  { name: Routes.Scan, component: ScanScreen },
  { name: Routes.ScanHelp, component: ScanHelpScreen },
];

const MapStack = createStackNavigator<ScanNavigatorParamsList>();

export default function ScanNavigator() {
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
