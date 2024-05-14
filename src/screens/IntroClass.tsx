import React from 'react';

import { ScreenProps, introDataTable } from "../types";
import TableCustom from '../componets/TableCustom';
import ClassComponent from '../componets/ClassComponent';
import {
  TextContainer,
  TitleText,
  SubTitleText,
  BoldText,
  NormalText,
} from '../componets/texts';

const FirstRoute = () => (
  <TextContainer>
    <TitleText> Introducción </TitleText>
    <BoldText>
      Bienvenido a SQLelectron la aplicacion móvil con una serie de lecciones y ejercicios practicos que te ayudaran a aprender SQL.
    </BoldText>
    <SubTitleText> ¿Que es SQL?  </SubTitleText>
    <NormalText>
      SQL "Structured Query Language" o en español "lenguaje de consulta estructurado", es un lenguaje diseñado para permitir a
      usuarios técnicos y no técnicos consultar, manipular y transformar datos de una base de datos relacional.
    </NormalText>
    <NormalText>
      Y debido a su simplicidad, las bases de datos SQL brindan almacenamiento seguro y escalable para millones de sitios web y aplicaciones móviles.
    </NormalText>
    <SubTitleText>
      Base de datos relacional
    </SubTitleText>
    <NormalText>
      Antes de aprender la sintaxis SQL, es importante tener un modelo de lo que es realmente una base de datos relacional.
    </NormalText>
    <NormalText>
      Una base de datos relacional representa una colección de tablas relacionadas (bidimensionales).
    </NormalText>
    <NormalText>
      Cada una de las tablas es similar a una hoja de cálculo Excel, con un número fijo de columnas con nombre
      (los atributos o propiedades de la tabla) y cualquier número de filas de datos.
    </NormalText>
  </TextContainer>
);

const SecondRoute = () => (
  <TextContainer>
    <TitleText>
      Base de datos relacional
    </TitleText>
    <TableCustom data={introDataTable} />
    <NormalText>
      En una base de datos de este tipo, es posible encontrar tablas adicionales relacionadas que contengan
      información como una lista de todos los conductores registrados en el estado, los tipos de permisos de
      conducir que se pueden conceder o incluso las infracciones de tráfico de cada conductor.
    </NormalText>
    <NormalText>
      Al aprender SQL, el objetivo es aprender a responder preguntas concretas sobre estos datos, para
      ayudarnos a tomar mejores decisiones en el futuro, como:
    </NormalText>
    <NormalText>
      ¿Qué tipos de vehículos circulan con menos de cuatro ruedas?
    </NormalText>
    <NormalText>
      ¿Cuántos modelos de coches fabrica Tesla?
    </NormalText>
  </TextContainer>
);


const IntroClass = ({navigation}: ScreenProps) => {
  return (
    <ClassComponent 
      urlImg={require('../../img/sql-intro.png')}
      firstTabComponent={FirstRoute}
      firstTabHeight={820}
      secondTabComponent={SecondRoute}
      secondTabHeight={660}
      titleTabFirst='Clase  '
      titleTabSecond='Ejemplo   '
      nextClass={() => navigation.navigate('FirstClass')}
    />
  );
}

export default IntroClass;
