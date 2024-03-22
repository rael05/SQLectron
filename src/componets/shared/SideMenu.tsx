import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Linking
} from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';
import {
    backGround1,
    backGround2,
    headerGradient1,
    sideMenuGradient2
} from "../../themes/colors";
import { tipsSideMenu } from "../../types";

const SideMenu = (props: DrawerContentComponentProps) => {
    const focusedRoute = props.state.routes[props.state.index];
    const focusedDescriptor = props.descriptors[focusedRoute.key].options;
    const rngTipIndex = Math.floor(Math.random() * 10);
    focusedDescriptor.drawerLabelStyle = {
        color: backGround1,
        fontFamily: 'Jost-Bold',
        marginVertical: -10,
        
    }
    focusedDescriptor.drawerItemStyle = {
        backgroundColor: 'transparent', borderBottomWidth: 0.5, borderBottomColor: 'white',}
    

    return (
        <DrawerContentScrollView {...props} style={styles.container}>
            <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                colors={[headerGradient1, sideMenuGradient2]}>
                    <Text style={styles.titleStyle}>
                        {focusedDescriptor.title}
                    </Text>
                    <View>
                        <Image source={require('../../../img/triangle.png')} style={styles.tringleShape}/>
                        <View style={styles.dialogSection}>
                            <Text style={styles.dialogText}>
                                {tipsSideMenu[rngTipIndex]}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.atomContainer}>
                        <Image source={require('../../../img/atom.gif')} style={styles.atomImg}/>
                    </View>
                <DrawerItemList {...props} />
                <View style={styles.footerContainer}>
                    <TouchableOpacity style={styles.footerItem} onPress={() => Linking.openURL('https://github.com/rael05/SQLectron')}>
                        <Image source={require('../../../img/iconoir_github.png')} />
                        <Text style={styles.labelFooter}>¡SQLectron github repo!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerItem}>
                        <Image source={require('../../../img/star.png')} />
                        <Text style={styles.labelFooter}>¡Califícanos!</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: headerGradient1,
        paddingTop: 15,
    },
    titleStyle: {
        color: backGround1,
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 5,
        fontFamily: 'Jost-SemiBold',
        paddingHorizontal: 15,
    },
    dialogSection: {
        marginTop: 15,
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 30,
        paddingHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 10,
        borderColor: 'white',
        backgroundColor: backGround2,
    },
    dialogText: {
        fontFamily: 'Jost',
        color: backGround1,
        fontSize: 14,
        textAlign: 'center',
    },
    tringleShape: {
        position: 'absolute',
        right: 60,
        bottom: -30,
    },
    atomContainer: {
        backgroundColor: '#9EC8B9',
        height: 120,
        width: 120,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        borderWidth: 3,
        borderColor: 'white',
        marginBottom: 20,
        alignSelf: 'center'
    },
    atomImg: {
        height: 105,
        width: 90,
    },
    footerContainer: {
        backgroundColor: '#3A6957',
        borderTopWidth: 3,
        borderTopColor: 'white',
        marginTop: 20,
        flexDirection: 'column',
        paddingTop: 10,
        paddingBottom: 30,
    },
    footerItem: {
        flexDirection: 'row',
        gap: 20,
        paddingVertical: 8,
        marginLeft: 15,
    },
    labelFooter: {
        color: '#C1F2B0',
        fontFamily: 'Jost-Regular',
        fontSize: 18,
    },
});

export default SideMenu;