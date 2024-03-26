import React, { useState } from 'react';

import { ScreenProps, firstClassDataExample1, introDataTable } from "../types";
import ClassComponent from '../componets/ClassComponent';
import {
  TextContainer,
  TitleText,
  SubTitleText,
  BoldText,
  NormalText,
  LinkText,
  CardContainer,
  CardText,
} from '../componets/texts';
import ModalComponent from '../componets/ModalComponent';
import TableCustom from '../componets/TableCustom';

type FirstRouteProps = {
    setVisibleFirstEg: (value: boolean) => void;
};

const FirstRoute = ({setVisibleFirstEg}: FirstRouteProps) => (
    <TextContainer>
        <TitleText>
            Clase 1: consulta "SELECT"
        </TitleText>
        <BoldText>
            Para recuperar datos de una base de datos SQL, necesitamos escribir sentencias SELECT, que a menudo
            se denominan como “Queries” en español “Consultas”.
        </BoldText>
        <SubTitleText>
            ¿Qué son las Consultas?
        </SubTitleText>
        <NormalText>
            Una consulta es una sentencia que declara qué datos estamos buscando, dónde encontrarlos en la base
            de datos y opcionalmente, cómo transformarlos antes de devolverlos.
        </NormalText>
        <SubTitleText> “SELECT” </SubTitleText>
        <NormalText>
            Como mencionamos en la introducción, se puede pensar en una tabla en SQL como un tipo de entidad (Ej: Perros),
            y cada fila de esa tabla como una instancia específica de ese tipo (Ej: Labrador, un beagle, un labrador de
            diferente color, etc).
        </NormalText>
        <NormalText>
            Esto significa que las columnas representarían las propiedades comunes compartidas por todas las instancias de
            esa entidad (Ej: color del pelaje, longitud de la cola, etc.).
        </NormalText>
        <NormalText>
            En una tabla de datos, la consulta más básica que podríamos escribir sería una que seleccione un par de
            columnas (propiedades) de la tabla con todas las filas (instancias).
        </NormalText>
        <CardContainer headerText='Consulta SELECT para columnas especificas'>
            <CardText>
                <CardText grayText>SELECT </CardText>
                columna, otra_columna, …
            </CardText>
            <CardText>
                <CardText grayText>FROM </CardText>
                mitabla;
            </CardText>
        </CardContainer>
        <NormalText>
            El resultado de esta consulta será un conjunto bidimensional de filas y columnas, el cual será una copia de
            la tabla, pero sólo con las columnas que solicitamos (
                <LinkText onPress={() => setVisibleFirstEg(true)}>
                    Otro Ejemplo
                </LinkText>
            ).
        </NormalText>
        <NormalText>
            Si queremos recuperar todas las columnas de datos de una tabla, podemos utilizar la abreviatura asterisco
            (*) en lugar de enumerar todos los nombres de columna individualmente.
        </NormalText>
        <CardContainer headerText='Consulta SELECT para todas las columnas'>
            <CardText>
                <CardText grayText>SELECT </CardText>
                *
            </CardText>
            <CardText>
                <CardText grayText>FROM </CardText>
                mitabla;
            </CardText>
        </CardContainer>
        <NormalText>
            Esta consulta, en particular, es realmente útil porque es una forma sencilla de inspeccionar una tabla
            viento todos los datos de una vez.
        </NormalText>
    </TextContainer>
);

const SecondRoute = () => (
    <TextContainer>
        <TitleText>
            Tareas:
        </TitleText>
        <NormalText cleanSpaces positionAlign='left'>
            1. Encuentra el titulo de cada pelicula
        </NormalText>
        <NormalText cleanSpaces positionAlign='left' grayText>
            2. Encuentra el director de cada pelicula
        </NormalText>
        <NormalText cleanSpaces positionAlign='left' grayText>
            3. Encuentra el titulo y director de cada pelicula
        </NormalText>
        <NormalText cleanSpaces positionAlign='left' grayText>
            4. Encuentra el titulo y año de cada pelicula
        </NormalText>
        <NormalText positionAlign='left' grayText>
            5. Encuentra toda la informacion de cada pelicula
        </NormalText>

        <SubTitleText positionAlign='left' cleanSpaces>
            Tabla: pelicula
        </SubTitleText>
        <TableCustom data={introDataTable} />
    </TextContainer>
);

const SecondClass = ({navigation}: ScreenProps) => {
    const [visibleFirstEg, setVisibleFirstEg] = useState<boolean>(false);
    const [query, setQuery] = useState<string>(
        'SELECT * FROM pelicula;'
    );

    return (
        <>
            <ClassComponent
                urlImg={require('../../img/clase1.png')}
                styleImg={{left: 15}}
                backgroundColorImg='#40679E'
                firstTabComponent={() => <FirstRoute setVisibleFirstEg={setVisibleFirstEg}/>}
                secondTabComponent={SecondRoute}
                titleTabFirst='Clase'
                firstTabHeight={1380}
                titleTabSecond='Ejercicio'
                prevClass={() => navigation.navigate('IntroClass')}
                nextClass={() => navigation.navigate('SecondClass')}
            />
            <ModalComponent
                visible={visibleFirstEg}
                setVisible={setVisibleFirstEg}
                title='SELECT para columnas especificas'
            >
                <ExampleContent1 />
            </ModalComponent>
        </>
    );
};

const ExampleContent1 = () => (
    <>
        <NormalText cleanSpaces>
            Tomemos la siguiente tabla de Carros como ejemplo, la cual es la misma tabla de la introduccion.
            Donde tenemos 5 columnas:
        </NormalText>
        <BoldText cleanSpaces>(Id, Marca, Llantas, Puerta, Tipo)</BoldText>
        <TableCustom data={introDataTable} />
        <NormalText>
            Ahora bien, si queremos mostrar solo las columnas de "
            <BoldText>
                Marca y Tipo
            </BoldText>
            " se logra con la siguiente consulta SQL:
        </NormalText>
        <CardContainer>
            <CardText>
                <CardText grayText>SELECT </CardText>
                Marca, Tipo
                <CardText grayText> FROM </CardText>
                Carros;
            </CardText>
        </CardContainer>
        <NormalText>
            Ejecutando la consulta tendriamos como resultado:
        </NormalText>
        <TableCustom data={firstClassDataExample1} />
    </>
);

export default SecondClass;