import React from 'react';
import { Text, StyleSheet } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {headerGradient1, headerGradient2} from '../../themes/colors';

const Header = () => {
    return(
        <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[headerGradient1, headerGradient2, headerGradient1]}
            style={styles.container}>
            <Text style={styles.text}> SQLectron </Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
      height: 65,
      display: 'flex',
      justifyContent: 'center',
      borderBottomWidth: 2,
      borderBottomColor: '#fff',
    },
    text: {
      fontFamily: 'Jost-Medium',
      color: '#fff',
      fontSize: 32,
      textAlign: 'center',
    },
});

export default Header;