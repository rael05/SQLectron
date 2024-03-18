import 'react-native-gesture-handler';

import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import IntroClass from './src/screens/IntroClass';
import FirstClass from './src/screens/FirstClass';
import SecondClass from './src/screens/SecondClass';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>

        <Drawer.Screen
          name="IntroClass"
          component={IntroClass}
          options={{title: 'Introduccion a SQL'}}/>

        <Drawer.Screen
          name='FirstClass'
          component={FirstClass}
          options={{title: 'Clase 1: consulta "SELECT"'}}/>

        <Drawer.Screen
          name='SecondClass'
          component={SecondClass}
          options={{title: "Clase 2: Consulta con restricciones 1"}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}