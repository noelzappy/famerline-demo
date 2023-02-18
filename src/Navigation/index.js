import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import FormOne from '../Screens/FormOne';
import FormTwo from '../Screens/FormTwo';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="FormOne"
        component={FormOne}
        options={{
          title: 'Form One',
        }}
      />
      <Stack.Screen
        name="FormTwo"
        component={FormTwo}
        options={{
          title: 'Form Two',
        }}
      />
    </Stack.Navigator>
  );
}
