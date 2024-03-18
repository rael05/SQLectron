import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {headerGradient1, headerGradient2} from '../../themes/colors';
import {DrawerNavigationOptions, DrawerNavigationProp} from '@react-navigation/drawer';
import {ParamListBase} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


type HeaderProps = {
  navigation: DrawerNavigationProp<ParamListBase, string, undefined>;
}

const Header = ({navigation}: HeaderProps) => {
    const openMenu = () => {
      navigation.openDrawer();
    };
    return(
        <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[headerGradient1, headerGradient2, headerGradient1]}
            style={styles.container}>
              <TouchableOpacity onPress={openMenu}>
                <Icon name="navicon" size={30} color="#ffffff"/>
              </TouchableOpacity>
              <Text style={styles.text}> SQLectron </Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
      height: 65,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 2,
      borderBottomColor: '#fff',
      gap: 50,
    },
    text: {
      fontFamily: 'Jost-Medium',
      color: '#fff',
      fontSize: 32,
      textAlign: 'center',
      width: 200,
      marginRight: 20,
    },
});

export default Header;