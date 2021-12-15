import React from 'react';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import Navigator from 'navigation/Navigator';
import TestApp from 'test';

function App() {
  return <Navigator />;
}

registerRootComponent(App);
