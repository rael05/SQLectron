import React, { useCallback, useEffect, useState } from "react";
import {
    Image,
    View,
    Animated,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
    Text,
    ImageSourcePropType,
} from 'react-native';

import { backGround1, imgBackGround1, textPrimary } from "../themes/colors";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Footer from "./shared/Footer";
import { changeTab, parcialHeader } from "../utils";
import { TabIndex } from "../types";
import { Keyboard } from "react-native";

type ClassComponentProps = {
    urlImg: ImageSourcePropType;
    styleImg?: any;
    backgroundColorImg?: string;
    firstTabComponent: () => React.JSX.Element;
    firstTabHeight?: number;
    secondTabComponent: () => React.JSX.Element;
    secondTabHeight?: number;
    titleTabFirst: string;
    titleTabSecond: string;
    nextClass?: () => void;
    prevClass?: () => void;
}

const renderTabBar = (props: any) => {
    return (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: textPrimary, height: 3 }}
            style={{ backgroundColor: backGround1, borderTopWidth: 1, borderTopColor: textPrimary }}
            renderLabel={({ route, focused }) => (
                <Text style={focused ? styles.tabLabelFocus : styles.tabLabel}>
                    {route.title}
                </Text>
            )}
        />
    )
};

const ClassComponent = ({
    urlImg,
    styleImg,
    backgroundColorImg = imgBackGround1,
    firstTabComponent,
    firstTabHeight = 1000,
    secondTabComponent,
    secondTabHeight = 1000,
    titleTabFirst,
    titleTabSecond,
    nextClass,
    prevClass,
}: ClassComponentProps) => {
    const { onScroll, containerPaddingTop, scrollIndicatorInsetTop } = parcialHeader();

    const layout = useWindowDimensions();
    const [index, setIndex] = useState<TabIndex>(TabIndex.first);
    const [screenHeight, setScreenHeight] = useState<number>(firstTabHeight);
    const [routes] = useState<Array<any>>([
        { key: 'first', title: titleTabFirst },
        { key: 'second', title: titleTabSecond },
    ]);
    const [scrollEnabled, setScrollEnabled] = useState(true);
    const scrollRef = React.createRef<ScrollView>();

    const keyboardDidShow = useCallback(() => {
        setScrollEnabled(false);
    }, []);

    const keyboardDidHide = useCallback(() => {
        setScrollEnabled(true);
    }, []);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", keyboardDidShow);
        const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", keyboardDidHide);

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    useEffect(() => {
        if (index === TabIndex.first) {
            setScreenHeight(firstTabHeight);
        } else if (index === TabIndex.last) {
            setScreenHeight(secondTabHeight);
        }
    }, [index]);

    const renderScene = SceneMap({
        first: firstTabComponent,
        second: secondTabComponent,
    });

    return (
        <Animated.ScrollView
            onScroll={onScroll}
            contentContainerStyle={{ paddingTop: containerPaddingTop }}
            scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
            ref={scrollRef}
            scrollEnabled={scrollEnabled}
        >
            <View style={{ ...styles.bgImg, backgroundColor: backgroundColorImg }}>
                <Image source={urlImg} style={[styles.imgStyle, styleImg]} />
            </View>
            <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                style={{ height: screenHeight }}
            />
            <Footer
                currentTabIndex={index}
                changeTab={(indexToChange) => changeTab(indexToChange, setIndex, scrollRef)}
                nextClass={nextClass}
                prevClass={prevClass} />
        </Animated.ScrollView>
    );
};

const styles = StyleSheet.create({
    bgImg: {
        paddingVertical: 20,
        paddingHorizontal: 13,
    },
    imgStyle: {
        width: 358,
        height: 226,
    },
    tabLabel: {
        color: textPrimary,
        fontFamily: 'Jost-Light',
        fontSize: 24,
        paddingVertical: 3,
    },
    tabLabelFocus: {
        color: textPrimary,
        fontFamily: 'Jost-ExtraBold',
        fontSize: 24,
        paddingVertical: 3,
    },
});

export default ClassComponent;