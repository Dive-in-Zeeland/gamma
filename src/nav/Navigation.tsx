import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from 'nav/MainNavigator';

const Navigation = () => (
  <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>
);

export default Navigation;
