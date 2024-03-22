import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Animated,
} from 'react-native';

import { imgBackGround1, backGround1, textPrimary } from '../themes/colors';
import { TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Footer from '../componets/shared/Footer';
import { ScreenProps, TabIndex, introDataTable } from "../types";
import { changeTab, parcialHeader } from '../utils';
import TableCustom from '../componets/TableCustom';

const FirstRoute = () => (
  <View style={styles.routeContainer}>
    <Text style={styles.textTitle}> Introducción </Text>
    <Text style={styles.subTitle}>
      Bienvenido a SQLelectron la aplicacion móvil con una serie de lecciones y ejercicios practicos que te ayudaran a aprender SQL.
    </Text>
    <Text style={styles.textSecondTitle}> ¿Que es SQL?  </Text>
    <Text style={styles.textNormal}>
      SQL "Structured Query Language" o en español "lenguaje de consulta estructurado", es un lenguaje diseñado para permitir a
      usuarios técnicos y no técnicos consultar, manipular y transformar datos de una base de datos relacional.
    </Text>
    <Text style={styles.textNormal}>
      Y debido a su simplicidad, las bases de datos SQL brindan almacenamiento seguro y escalable para millones de sitios web y aplicaciones móviles.
    </Text>
    <Text style={styles.textSecondTitle}>
      Base de datos relacional
    </Text>
    <Text style={styles.textNormal}>
      Antes de aprender la sintaxis SQL, es importante tener un modelo de lo que es realmente una base de datos relacional.
    </Text>
    <Text style={styles.textNormal}>
      Una base de datos relacional representa una colección de tablas relacionadas (bidimensionales).
    </Text>
    <Text style={styles.textNormal}>
      Cada una de las tablas es similar a una hoja de cálculo Excel, con un número fijo de columnas con nombre
      (los atributos o propiedades de la tabla) y cualquier número de filas de datos.
    </Text>
  </View>
);

const SecondRoute = () => (
  <View style={styles.routeContainer}>
    <Text style={styles.textTitle}>
      Base de datos relacional
    </Text>
    <TableCustom data={introDataTable} />
    <Text style={styles.textNormal}>
      En una base de datos de este tipo, es posible encontrar tablas adicionales relacionadas que contengan
      información como una lista de todos los conductores registrados en el estado, los tipos de permisos de
      conducir que se pueden conceder o incluso las infracciones de tráfico de cada conductor.
    </Text>
    <Text style={styles.textNormal}>
      Al aprender SQL, el objetivo es aprender a responder preguntas concretas sobre estos datos, para
      ayudarnos a tomar mejores decisiones en el futuro, como:
    </Text>
    <Text style={styles.textNormal}>
      ¿Qué tipos de vehículos circulan con menos de cuatro ruedas?
    </Text>
    <Text style={styles.textNormal}>
      ¿Cuántos modelos de coches fabrica Tesla?
    </Text>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const renderTabBar = (props: any) => {
  return(
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: textPrimary, height: 3 }}
      style={{ backgroundColor: backGround1, borderTopWidth: 1, borderTopColor: textPrimary }}
      renderLabel={({ route, focused }) => (
        <Text style={focused ? styles.tabLabelFocus : styles.tabLabel}>
          {route.title}
        </Text>
      )}
    />
)};


const IntroClass = ({navigation}: ScreenProps) => {
  const { onScroll, containerPaddingTop, scrollIndicatorInsetTop } = parcialHeader();

  const layout = useWindowDimensions();
  const [index, setIndex] = useState<TabIndex>(TabIndex.first);
  const [screenHeight, setScreenHeight] = useState<number>(820);
  const [routes] = useState<Array<any>>([
    { key: 'first', title: 'Clase  ' },
    { key: 'second', title: 'Ejemplo  ' },
  ]);
  const scrollRef = React.createRef<ScrollView>();

  useEffect(() => {
    if(index === TabIndex.first) {
      setScreenHeight(820);
    } else if(index === TabIndex.last) {
      setScreenHeight(660);
    }
  }, [index]);

  return (
    <Animated.ScrollView
      onScroll={onScroll}
      contentContainerStyle={{ paddingTop: containerPaddingTop }}
      scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
      ref={scrollRef}
    >
      <View style={styles.bgImg}>
        <Image source={require('../../img/sql-intro.png')} style={styles.imgStyle} />
      </View>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        style={{height: screenHeight}}
      />
      <Footer
        currentTabIndex={index}
        changeTab={(indexToChange) => changeTab(indexToChange, setIndex, scrollRef)}
        nextClass={() => navigation.navigate('FirstClass')}/>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: backGround1,
    flex: 1,
  },
  imgStyle: {
    width: 356,
    height: 224,
  },
  bgImg: {
    backgroundColor: imgBackGround1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  routeContainer: {
    flex: 1,
    backgroundColor: backGround1,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  tabLabel: {
    color: textPrimary,
    fontFamily: 'Jost-Light',
    fontSize: 24,
    paddingVertical: 3,
  },
  tabLabelFocus: {
    color: textPrimary,
    fontFamily: 'Jost-ExtraBold',
    fontSize: 24,
    paddingVertical: 3,
  },
  textNormal: {
    color: textPrimary,
    fontSize: 16,
    fontFamily: 'Jost-Regular',
    textAlign: 'center',
    marginBottom: 15,
  },
  subTitle: {
    color: textPrimary,
    fontSize: 20,
    fontFamily: 'Jost-SemiBold',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
  textTitle: {
    fontFamily: 'Jost-Bold',
    fontSize: 32,
    color: textPrimary,
    textAlign: 'center',
  },
  textSecondTitle: {
    color: textPrimary,
    fontSize: 24,
    fontFamily: 'Jost-Regular',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default IntroClass;
