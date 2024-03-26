import React from "react";
import { StyleSheet, View } from "react-native";

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-reanimated-table';
import { backGround1, textPrimary } from "../themes/colors";
import { DataTables } from "../types";

type TableCustomProps = {
    data: DataTables;
};

const TableCustom = ({data}: TableCustomProps) => {
    return(
        <View style={styles.container}>
            <Table borderStyle={styles.tableBorder}>
                <Row
                data={data.headTable}
                textStyle={styles.textHeader}
                />
                <Rows
                data={data.dataTable}
                textStyle={styles.textRow}
                style={styles.stylesRow}
                />
            </Table>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: textPrimary,
        borderRadius: 2,
        width: '100%'
    },
    tableBorder: {
        borderWidth: 2,
        borderColor: backGround1,
    },
    textHeader: {
        fontSize: 16,
        fontFamily: 'Jost-SemiBold',
        textAlign: 'center',
        color: textPrimary,
    },
    textRow: {
        fontSize: 15,
        fontFamily: 'Jost-Regular',
        textAlign: 'center',
        color: backGround1,
    },
    stylesRow: {
        backgroundColor: textPrimary
    },
});

export default TableCustom;
