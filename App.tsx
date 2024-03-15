import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import IntroClass from './src/screens/IntroClass';

function SecondClass({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: { borderColor: 'red', borderWidth: 1 },
        }}
        initialRouteName="Home">
        <Drawer.Screen name="Introduccion a SQL" component={IntroClass} />
        <Drawer.Screen name='Clase 1: consulta "SELECT"' component={SecondClass} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}