import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TransitionPresets, createDrawerNavigator, createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

// Screens
import MapHelpScreen from "./screens/map/MapHelpScreen"
import ScanHelpScreen from "./screens/scan/ScanHelpScreen";
import MapScreen from './screens/map/MapScreen';
import ScanScreen from './screens/scan/ScanScreen';
import TokenScreen from './screens/TokenScreen';
import SettingScreen from './screens/SettingScreen';

const MapStack = createStackNavigator();
const ScanStack = createStackNavigator();
const MapSubStack = createStackNavigator();
const ScanSubStack = createStackNavigator();

const SubMapStackScreen = () => (
  <MapSubStack.Navigator headerMode="none">
    <MapSubStack.Screen
      name="Map"
      component={MapScreen}
    />
  </MapSubStack.Navigator>
)

const SubScanStackScreen = () => (
  <ScanSubStack.Navigator headerMode="none">
    <ScanSubStack.Screen
      name="Scan"
      component={ScanScreen}
    />
  </ScanSubStack.Navigator>
)

const MapStackScreen = () => (
  <MapStack.Navigator
    headerMode="none"
    mode="modal"
    screenOptions={{
      ...TransitionPresets.SlideFromRightIOS,
      headerStyle: {
        backgroundColor: "tomato",
      },
    }}
  >
    <MapStack.Screen name="SubMapStack" component={SubMapStackScreen} />
    <MapStack.Screen
      name="MapHelp"
      component={MapHelpScreen}
      options={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "skyblue",
        },
      }}
    />
  </MapStack.Navigator>
)

const ScanStackScreen = () => (
  <ScanStack.Navigator
    headerMode="none"
    mode="modal"
    screenOptions={{
      ...TransitionPresets.SlideFromRightIOS,
      headerStyle: {
        backgroundColor: "tomato",
      },
    }}
  >
    <ScanStack.Screen
      name="QrSubStack"
      component={SubScanStackScreen}
    />
    <ScanStack.Screen
      name="ScanHelp"
      component={ScanHelpScreen}
      options={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "skyblue",
        },
      }}
    />
  </ScanStack.Navigator>
)

// Main navigator
const TabNavigation = () => (
  <Tabs.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        size = 30;

        const icons = {
          'Map': 'map',
          'Token List': 'grid',
          'Camera': 'aperture',
          'Home': 'ios-home',
          'Settings': 'settings',
        }

        iconName = icons[route.name] ?? '';

        // returns icon to the tab view
        return <Ionicons name={iconName} size={size} color={color} style={{ marginTop: 10, }} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'teal',
      inactiveTintColor: 'grey',
      style: {
        flex: 0.10,
        margin: 10,
        borderRadius: 15,
      }
    }}
  >
    <Tabs.Screen
      name="Token List"
      options={{ tabBarLabel: '' }}
      component={TokenScreen}
    />
    <Tabs.Screen name="Map" options={{ tabBarLabel: '' }} component={MapStackScreen} />
    <Tabs.Screen
      name="Home"
      options={{ tabBarLabel: '' }}
      component={HelpScreen}
    />
    <Tabs.Screen name="Camera" options={{ tabBarLabel: '' }} component={ScanStackScreen} />
    <Tabs.Screen
      name="Settings"
      options={{ tabBarLabel: '' }}
      component={SettingScreen}
    />
  </Tabs.Navigator>
)

const Tabs = createBottomTabNavigator();

const NavigationController = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: 'teal' }}>
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  </SafeAreaView>
)

export default NavigationContainer;