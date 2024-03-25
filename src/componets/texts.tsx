import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { backGround1, textPrimary } from '../themes/colors';

type TextProps = {
    children: React.ReactNode
}

export const TextContainer = ({children}: TextProps) => (
    <View style={styles.textContainer}>{children}</View>
);

export const TitleText = ({children}: TextProps) => (
    <Text style={styles.textTitle}>{children}</Text>
);

export const SubTitleText = ({children}: TextProps) => (
    <Text style={styles.subTitleText}>{children}</Text>
);

export const BoldText = ({children}: TextProps) => (
    <Text style={styles.boldText}>{children}</Text>
);

export const NormalText = ({children}: TextProps) => (
    <Text style={styles.normalText}>{children}</Text>
);

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        backgroundColor: backGround1,
        paddingTop: 10,
        paddingHorizontal: 15,
    },
    textTitle: {
        fontFamily: 'Jost-Bold',
        fontSize: 32,
        color: textPrimary,
        textAlign: 'center',
    },
    subTitleText: {
        color: textPrimary,
        fontSize: 24,
        fontFamily: 'Jost-Regular',
        textAlign: 'center',
        marginBottom: 10,
    },
    boldText: {
        color: textPrimary,
        fontSize: 20,
        fontFamily: 'Jost-SemiBold',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 20,
    },
    normalText: {
        color: textPrimary,
        fontSize: 16,
        fontFamily: 'Jost-Regular',
        textAlign: 'center',
        marginBottom: 15,
    }
});
