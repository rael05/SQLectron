import React, {useState} from 'react';
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
import {PrimaryButton, OutlinePrimaryB} from '../componets/buttons';
import Footer from '../componets/shared/Footer';
import { ScreenProps } from "../types";
import { parceHeader } from '../utils';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: backGround1 }}>
    <Text style={styles.textTitle}> Introducción </Text>
    <Text style={styles.textNormal}>
      Bienvenido a SQLelectron una aplicacion móvil con un serie de lecciones y ejercicios practicos que te ayudaran a aprender SQL.
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
  <View style={{ flex: 1, backgroundColor: backGround1 }} />
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
  const { onScroll, containerPaddingTop, scrollIndicatorInsetTop } = parceHeader();

  const layout = useWindowDimensions();
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState<Array<any>>([
    { key: 'first', title: 'Clase  ' },
    { key: 'second', title: 'Ejemplo  ' },
  ]);
  const scrollRef = React.createRef<ScrollView>();

  const changeTab = (index: number) => {
    setIndex(index);
    scrollRef.current?.scrollTo({y: 0, animated: true});
  };

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
          style={{height: 650}}
        />
        <Footer>
          {index === 0 ? (
            <PrimaryButton title={'Siguiente'} action={() => changeTab(1)}/>
          ) :(
            <View style={styles.footerContainer}>
              <OutlinePrimaryB title={'Anterior'} action={() => changeTab(0)}/>
              <PrimaryButton title={'Siguiente'} action={() => {
                navigation.navigate('FirstClass');
              }}/>
            </View>
          )}
        </Footer>
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
  },
  footerContainer: {
    flexDirection: 'row',
    gap: 40,
  },
});

export default IntroClass;
