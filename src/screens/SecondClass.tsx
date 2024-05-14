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
        <TitleText>
            Clase 1: consulta "SELECT"
        </TitleText>
    </TextContainer>
);

const SecondRoute = () => (
    <TextContainer>
        <TitleText>
            Clase 1: consulta "SELECT"
        </TitleText>
    </TextContainer>
);

const SecondClass = ({ navigation }: ScreenProps) => {
    return (
        <ClassComponent
            urlImg={require('../../img/sql-intro.png')}
            firstTabComponent={FirstRoute}
            secondTabComponent={SecondRoute}
            titleTabFirst='Clase'
            titleTabSecond='Ejercicio'
            nextClass={() => navigation.navigate('FirstClass')}
        />
    );
};

export default SecondClass;