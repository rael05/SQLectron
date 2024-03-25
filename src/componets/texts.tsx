import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { backGround1, bgCardText, grayForText, linkText, textPrimary } from '../themes/colors';

type TextProps = {
    children: React.ReactNode;
}

type LinkTextProps = {
    children: React.ReactNode;
    onPress: () => void;
}

type CardContainerProps = {
    children: React.ReactNode;
    headerText?: string;
}

type CardTextProps = {
    children: React.ReactNode;
    grayText?: boolean;
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

export const LinkText = ({children, onPress}: LinkTextProps) => (
    <Text style={styles.linkText} onPress={onPress}>{children}</Text>
);

export const CardContainer = ({children, headerText}: CardContainerProps) => (
    <View style={styles.cardContainerStyle}>
        <Text style={styles.cardHeaderText}>{headerText}</Text>
        {children}
    </View>
);

export const CardText = ({children, grayText = false}: CardTextProps) => {
    const grayTextStyle = {
        ...styles.cardTextStyle,
        color: grayText ? grayForText : '#000',
    }
    return(
        <Text style={grayTextStyle}>{children}</Text>
    );
};

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
    },
    linkText: {
        color: linkText,
        fontSize: 16,
        fontFamily: 'Jost-Regular',
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    cardContainerStyle: {
        backgroundColor: bgCardText,
        marginHorizontal: 10,
        paddingLeft: 20,
        paddingVertical:10,
        marginBottom: 15,
        elevation: 10,
    },
    cardHeaderText: {
        fontSize: 12,
        fontFamily: 'Jost-Regular',
        paddingBottom: 5,
    },
    cardTextStyle: {
        fontFamily: 'Jost-Bold',
        fontSize: 16,
    },
});
