import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SideMenu from './src/componets/shared/SideMenu';

import IntroClass from './src/screens/IntroClass';
import FirstClass from './src/screens/FirstClass';
import SecondClass from './src/screens/SecondClass';
import { backGround1 } from './src/themes/colors';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{drawerLabelStyle: styles.sideMenuLabel, drawerItemStyle: styles.itemStyle}}
        drawerContent={(props) => <SideMenu {...props} />}>
        <Drawer.Screen
          name="IntroClass"
          component={IntroClass}
          options={{title: 'Introduccion a SQL' }}/>

        <Drawer.Screen
          name='FirstClass'
          component={FirstClass}
          options={{title: 'Clase 1: consulta "SELECT"'}}/>

        <Drawer.Screen
          name='SecondClass'
          component={SecondClass}
          options={{title: "Clase 2: Consulta con restricciones 1"}}/>

        
        <Drawer.Screen
          name='ThirdClass'
          component={ClassForTest}
          options={{title: "Clase 3: Consulta con restricciones 2"}}/>
        
        <Drawer.Screen
          name='FourthClass'
          component={ClassForTest}
          options={{title: "Clase 4: Filtrar y ordenar"}}/>
        
        <Drawer.Screen
          name='FirstReview'
          component={ClassForTest}
          options={{title: 'Repaso: Consulta simple "SELECT"'}}/>
        
        <Drawer.Screen
          name='SixthClass'
          component={ClassForTest}
          options={{title: "Clase 6: Consulta Multi-tablas con JOINs"}}/>
        
        <Drawer.Screen
          name='SeventhClass'
          component={ClassForTest}
          options={{title: "Clase 7: OUTER JOINs"}}/>
        
        <Drawer.Screen
          name='EighthClass'
          component={ClassForTest}
          options={{title: "Clase 8: Clase breve sobre los NULL"}}/>
        
        <Drawer.Screen
          name='NinthClass'
          component={ClassForTest}
          options={{title: "Clase 9: Consulta con expresiones"}}/>
        
        <Drawer.Screen
          name='TenthClass'
          component={ClassForTest}
          options={{title: "Clase 10: Funciones de agregación 1"}}/>
        
        <Drawer.Screen
          name='EleventhClass'
          component={ClassForTest}
          options={{title: "Clase 11: Funciones de agregación 2"}}/>
        
        <Drawer.Screen
          name='TwelfthClass'
          component={ClassForTest}
          options={{title: "Clase 12: Orden de ejecución de consulta"}}/>
        
        <Drawer.Screen
          name='ThirteenthClass'
          component={ClassForTest}
          options={{title: "Clase 13: Inserción de registros"}}/>
        
        <Drawer.Screen
          name='FourteenthClass'
          component={ClassForTest}
          options={{title: "Clase 14: Actualización de registros"}}/>
        
        <Drawer.Screen
          name='FifteenthClass'
          component={ClassForTest}
          options={{title: "Clase 15: Cómo borrar registros"}}/>
        
        <Drawer.Screen
          name='SixteenthClass'
          component={ClassForTest}
          options={{title: "Clase 16: Creando tablas"}}/>
        
        <Drawer.Screen
          name='SeventeenthClass'
          component={ClassForTest}
          options={{title: "Clase 17: Modificando tablas"}}/>
        
        <Drawer.Screen
          name='EighteenthClass'
          component={ClassForTest}
          options={{title: "Clase 18: Eliminando tablas"}}/>

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sideMenuLabel: {
    color: backGround1,
    fontFamily: 'Jost',
    marginVertical: -10,
    marginHorizontal: -5,
  },
  itemStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
  },
});

const ClassForTest = () => {
  return(<></>);
};