import React from "react";
import { StyleSheet, View } from "react-native";

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-reanimated-table';
import { backGround1, textPrimary } from "../themes/colors";

type TableCustomProps = {
    data: Array<Object>;
};

const TableCustom = ({data}: TableCustomProps) => {
    const headerTable = Object.keys(data[0] || {})
    const dataTable = data.map(row => Object.values(row))

    return(
        <View style={styles.container}>
            <Table borderStyle={styles.tableBorder}>
                <Row
                data={headerTable}
                textStyle={styles.textHeader}
                />
                <Rows
                data={dataTable}
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
