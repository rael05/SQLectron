import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { buttonPrimary } from '../themes/colors';

type PrimaryButtonPros = {
    title: string,
    action: () => void,
    backgroudColor?: string,
}

export const PrimaryButton = ({
    title,
    action,
    backgroudColor = buttonPrimary,
}: PrimaryButtonPros) => {
    const containerStyle = {
        ...styles.container,
        backgroundColor: backgroudColor
    };
    return(
        <TouchableOpacity style={containerStyle} onPress={action}>
            <Text style={styles.labelStyle}>{title}</Text>
        </TouchableOpacity>
    );
};

export const OutlinePrimaryB = ({title, action}: PrimaryButtonPros) => {
    return(
        <TouchableOpacity style={styles.outlineContainer} onPress={action}>
            <Text style={styles.outlineLabel}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 125,
        display: 'flex',
        justifyContent: 'center'
    },
    labelStyle: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Jost-SemiBold',
        fontSize: 14,
    },
    outlineContainer: {
        height: 50,
        width: 125,
        display: 'flex',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: buttonPrimary,
    },
    outlineLabel: {
        color: buttonPrimary,
        textAlign: 'center',
        fontFamily: 'Jost-SemiBold',
        fontSize: 14,
    },
});