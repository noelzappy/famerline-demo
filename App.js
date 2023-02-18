import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/Navigation';
import {ApiProvider} from '@reduxjs/toolkit/dist/query/react';
import {api} from './src/Services/api';

export default function App() {
  return (
    <ApiProvider api={api}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </ApiProvider>
  );
}
