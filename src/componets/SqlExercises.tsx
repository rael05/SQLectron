import React, { useCallback, useEffect, useState } from 'react';
import { TextInput, StyleSheet, ScrollView, View, Keyboard } from 'react-native';

import { textPrimary } from '../themes/colors';
import TableCustom from './TableCustom';
import { Pelicula } from '../types';
import {
    getDBConnection,
    createTablePeliculas,
    getValuesByTable,
    deleteTableByName,
    pelicula_table_name,
    executeQuery
} from '../db-service';
import { SubTitleText } from './texts';
import { QueryButton } from './buttons';

const SqlExercises = () => {
    const [inputValue, setInputValue] = useState<string>(`SELECT * FROM ${pelicula_table_name};`);
    const [peliculas, setPeliculas] = useState<Array<Pelicula>>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const loadDataCallback = useCallback(async () => {
        const db = await getDBConnection();
        await deleteTableByName(db, pelicula_table_name);
        await createTablePeliculas(db);

        const values = await getValuesByTable(db, pelicula_table_name);
        setPeliculas(values as Array<Pelicula>);
        await db.close();
    }, []);

    const runQuery = async () => {
        const db = await getDBConnection();
        const values = await executeQuery(db, inputValue);
        if (typeof (values) == 'string') {
            setErrorMessage(values);
        }
        setPeliculas(values as Array<Pelicula>);
        await db.close();
    };

    useEffect(() => {
        if (peliculas.length === 0) {
            loadDataCallback();
        }
    }, [loadDataCallback]);

    return (
        <View>
            <SubTitleText positionAlign='left' cleanSpaces>
                Tabla: {pelicula_table_name}
            </SubTitleText>
            <ScrollView style={{ height: '10%' }}>
                <TableCustom data={peliculas} />
            </ScrollView>

            <View style={styles.inputSection}>
                <TextInput
                    placeholder="Escribe la consulta"
                    multiline
                    numberOfLines={2}
                    maxLength={160}
                    value={inputValue}
                    onChangeText={(value) => setInputValue(value)}
                    style={styles.inputStyle} />
                <QueryButton action={() => runQuery()} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: 'white',
        color: textPrimary,
        borderColor: textPrimary,
        borderWidth: 0.5,
        paddingHorizontal: 10,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        width: '75%'
    },
    tableScroll: {
        width: '100%',
        height: 100,
        borderColor: 'red',
        borderWidth: 1,
    },
    inputSection: {
        flexDirection: 'row',
    }
});

export default SqlExercises;