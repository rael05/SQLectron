import React, { useState } from "react";
import {
    View,
    Modal,
    ScrollView,
    StyleSheet,
} from "react-native";

import { PrimaryButton } from "./buttons";
import { BoldText } from "./texts";
import { textPrimary, linkText, backGround2, backGround1 } from "../themes/colors";

type ModalComponentProps = {
    children: React.ReactNode;
    visible: boolean;
    setVisible: (value: boolean) => void;
    title?: string;
}

const ModalComponent = ({
    children,
    visible,
    setVisible,
    title,
}: ModalComponentProps) => {
    return(
        <Modal
            animationType='fade'
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {title && (
                        <View style={styles.titleContainer}>
                            <BoldText cleanSpaces>{title}</BoldText>
                        </View>
                    )}
                    <ScrollView style={styles.scrollView}>
                        {children}
                        <View style={styles.buttonSection}>
                            <PrimaryButton
                                title='Continuar'
                                action={() => setVisible(!visible)}
                            />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 20,
        alignItems: 'center',
        width: '90%',
        height: '80%',
    },
    titleContainer: {
        borderBottomColor: textPrimary,
        borderBottomWidth: 2,
        width: '100%',
        paddingBottom: 5,
        marginBottom: 5,
    },
    scrollView: {
        borderRadius: 20,
        marginVertical: 10,
    },
    buttonSection: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ModalComponent