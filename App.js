import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
