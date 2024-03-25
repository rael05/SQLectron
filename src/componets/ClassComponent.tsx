import React, { useEffect, useState } from "react";
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
import { TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Footer from "./shared/Footer";
import { changeTab, parcialHeader } from "../utils";
import { TabIndex } from "../types";

type ClassComponentProps = {
    urlImg: ImageSourcePropType;
    firstTabComponent: () => React.JSX.Element;
    secondTabComponent: () => React.JSX.Element;
    titleTabFirst: string;
    titleTabSecond: string;
    nextClass?: () => void;
    prevClass?: () => void;
}

const renderTabBar = (props: any) => {
    return(
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
    firstTabComponent,
    secondTabComponent,
    titleTabFirst,
    titleTabSecond,
    nextClass,
    prevClass,
}: ClassComponentProps) => {
    const { onScroll, containerPaddingTop, scrollIndicatorInsetTop } = parcialHeader();

    const layout = useWindowDimensions();
    const [index, setIndex] = useState<TabIndex>(TabIndex.first);
    const [screenHeight, setScreenHeight] = useState<number>(820);
    const [routes] = useState<Array<any>>([
        { key: 'first', title: titleTabFirst },
        { key: 'second', title: titleTabSecond },
    ]);
    const scrollRef = React.createRef<ScrollView>();

    useEffect(() => {
        if(index === TabIndex.first) {
            setScreenHeight(820);
        } else if(index === TabIndex.last) {
            setScreenHeight(660);
        }
    }, [index]);

    const renderScene = SceneMap({
        first: firstTabComponent,
        second: secondTabComponent,
    });

    return(
        <Animated.ScrollView
            onScroll={onScroll}
            contentContainerStyle={{ paddingTop: containerPaddingTop }}
            scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
            ref={scrollRef}
        >
            <View style={styles.bgImg}>
                <Image source={urlImg} style={styles.imgStyle} />
            </View>
            <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                style={{height: screenHeight}}
            />
            <Footer
                currentTabIndex={index}
                changeTab={(indexToChange) => changeTab(indexToChange, setIndex, scrollRef)}
                nextClass={nextClass}
                prevClass={prevClass}/>
        </Animated.ScrollView>
    );
};

const styles = StyleSheet.create({
    bgImg: {
        backgroundColor: imgBackGround1,
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    imgStyle: {
        width: 356,
        height: 224,
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