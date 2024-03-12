import React, {ReactNode} from 'react';
import { StyleSheet, View } from 'react-native';

import { textPrimary } from '../../themes/colors';

interface PrimaryButtonProps {
    children?: ReactNode
}

const Footer = ({children}: PrimaryButtonProps) => {
    return(
        <View style={styles.container}>
            {children}
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
    },
});

export default Footer;