import {openDatabase, enablePromise, SQLiteDatabase} from 'react-native-sqlite-storage';
import { formatQueryResults } from './utils';

enablePromise(true);

export const getDBConnection = async () => {
    return openDatabase({name: 'sqlelectron-data.db', location: 'default'});
};

export const pelicula_table_name = "peliculas";
export const createTablePeliculas = async (db: SQLiteDatabase) => {
    // create table if not exists

    const query = `CREATE TABLE IF NOT EXISTS ${pelicula_table_name}(
        id INTEGER PRIMARY KEY,
        titulo VARCHAR(50),
        director VARCHAR(50),
        anio INTEGER,
        duracion_minutos INTEGER
    );`;
    await db.executeSql(query);

    const rows = `INSERT OR REPLACE INTO peliculas(id, titulo, director, anio, duracion_minutos)
    VALUES(1, 'Toy Story', 'John Lasseter', 1995, 81),
    (2, 'Bichos', 'John Lasseter', 1998, 95),
    (3, 'Toy Story 2', 'John Lasseter', 1999, 93),
    (4,	'Monsters, Inc.', 'Pete Docter', 2001, 92),
    (5,	'Buscando a Nemo', 'Andrew Stanton', 2003, 107),
    (6,	'Los Increibles', 'Brad Bird', 2004, 116),
    (7,	'Cars', 'John Lasseter', 2006, 117),
    (8,	'WALL-E', 'Andrew Stanton', 2008, 104),
    (9, 'Up', 'Pete Docter', 2009, 101),
    (10, 'Toy Story 3', 'Lee Unkrich', 2010, 103),
    (11, 'Cars 2', 'John Lasseter', 2011, 120),
    (12, 'Valiente', 'Brenda Chapman', 2012, 102),
    (13, 'Monstruos University', 'Dan Scanlon', 2013, 110);`;
    const result = await db.executeSql(rows);
    console.log(result);
};

export const getValuesByTable = async (db: SQLiteDatabase, tableName: string) => {
    try{
        const results = await db.executeSql(`SELECT * FROM ${tableName};`);

        return formatQueryResults(results);
    } catch (error) {
        console.error(error);
        throw Error('Failed to get todoItems !!!');
    }
};

export const deleteTableByName = async (db:SQLiteDatabase, tableName: string) => {
    const query = `drop table ${tableName}`;
    await db.executeSql(query);
};

export const executeQuery = async (db: SQLiteDatabase, query: string) => {
    try {
        const results = await db.executeSql(query);
        return formatQueryResults(results);
    } catch(error) {
        return error.message;
    }
};