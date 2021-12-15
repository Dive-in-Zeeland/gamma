import React from 'react';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import Navigator from 'navigation/Navigator';

function App() {
  return <Navigator />;
}

registerRootComponent(App);
