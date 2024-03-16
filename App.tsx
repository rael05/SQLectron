import 'react-native-gesture-handler';

import React, {useState} from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import IntroClass from './src/screens/IntroClass';
import Header from './src/componets/shared/Header';


function SecondClass({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  const [headerShow, setHeaderShow] = useState<boolean>(true);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: headerShow,
          drawerStyle: { borderColor: 'red', borderWidth: 1 },
          header: ({ navigation, route, options }) => {
            return <Header navigation={navigation}/>;
          }
        }}>
        <Drawer.Screen name="Introduccion a SQL" component={IntroClass}/>
        <Drawer.Screen name='Clase 1: consulta "SELECT"' component={SecondClass} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}