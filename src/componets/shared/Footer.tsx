import React from 'react';
import { StyleSheet, View } from 'react-native';

import { textPrimary } from '../../themes/colors';
import { OutlinePrimaryB, PrimaryButton } from '../buttons';
import { TabIndex } from '../../types';

type FooterProps = {
    currentTabIndex: TabIndex;
    changeTab: (index: TabIndex) => void;
    nextClass?: () => void;
    prevClass?: () => void;
}

const Footer = ({
    currentTabIndex,
    changeTab,
    nextClass,
    prevClass
}: FooterProps) => {
    const prevAction = (action?: () => void | undefined) => {
        if(currentTabIndex === TabIndex.last){
            changeTab(TabIndex.first)
        } else if (action) {
            action();
        }
    };

    const nextAction = (action?: () => void) => {
        if(currentTabIndex === TabIndex.first){
            changeTab(TabIndex.last)
        } else if (action) {
            action();
        }
    };

    return(
        <View style={styles.container}>
            {(currentTabIndex === TabIndex.last || prevClass) && (
                <OutlinePrimaryB title={'Anterior'} action={() => prevAction(prevClass)}/>
            )}
            {(currentTabIndex === TabIndex.first || nextClass) && (
                <PrimaryButton title={'Siguiente'} action={() => nextAction(nextClass)}/>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 90,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: textPrimary,
        flexDirection: 'row',
        gap: 40,
    },
});

export default Footer;