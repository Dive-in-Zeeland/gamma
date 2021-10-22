import "react-native-gesture-handler";
import React from "react";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.main}> 
      <View style={styles.home} >  
      <Button
        title="Open PopUp"
        onPress={() => {
        navigation.navigate("MyModal");
        }}
        />
      <Button
        title="Open PopUp 2"
        onPress={() => {
        navigation.navigate("SecondMyModal");
        }}
      />
      </View>
    </View>
);
}

const styles = StyleSheet.create({
  main:{
      flex: 1,
      backgroundColor:"teal",
  },
  home: {
      flex: 1,
      margin: 10,
      backgroundColor: "white",
      borderRadius: 15,
  },
});



function ModalScreen(route) {
  return (
    <View style={styles.main}> 
    <View style={styles.home} >  
    <View style={{ margin: 60 }}>
    <Text style={{ fontSize: 24 }}>Modal 1</Text>
    <Button
        title="Close this modal"
        onPress={() => {
          route.navigation.goBack();
        }}
    />
    </View>
    </View>
    </View>
  );
}
function SecondModalScreen(route) {
  return (
    <View style={styles.main}> 
    <View style={styles.home} >  
    <View style={{ margin: 60 }}>
    <Text style={{ fontSize: 24 }}>Modal 2</Text>
    <Button
        title="Close this modal"
        onPress={() => {
          route.navigation.goBack();
        }}
    />
    </View>
    </View>
    </View>
  );
}


const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator headerMode="none">
      
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home Screen",
        }}
      />
    </MainStack.Navigator>
  );
}

function RootStackScreen() {
  return (
    <RootStack.Navigator 
    headerMode="none"
      mode="modal"
      screenOptions={{
        headerStyle: {
          backgroundColor: "tomato",
        },
      }}
    >
      <RootStack.Screen name="MainStack" component={MainStackScreen} />
      <RootStack.Screen
        name="MyModal"
        component={ModalScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "skyblue",
          },
        }}
      />
      <RootStack.Screen
        name="SecondMyModal"
        component={SecondModalScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "skyblue",
          },
        }}
      />
    </RootStack.Navigator>
  );
}

function SettingsScreen() {
  return (
    <View style={{ margin: 60 }}>
      <Text style={{ fontSize: 24 }}>This is a Settings Tab</Text>
    </View>
  );
}

function TabNavigation() {
  return (
    <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'teal',
          inactiveTintColor: 'grey',
          style: {
            margin: 10,
            padding: 1,
            borderRadius: 15,
            elavation: 0,
          }
      }}
      >
      <Tabs.Screen name="Home" component={RootStackScreen} />
      <Tabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarBadge: 3,
        }}
      />
    </Tabs.Navigator>
  );
}

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'teal'}}>
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
    </SafeAreaView>
  );
}
