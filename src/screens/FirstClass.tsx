import React, { useState } from "react";
import {Text, Animated, ScrollView} from "react-native";

import { ScreenProps, TabIndex } from "../types";
import { changeTab, parcialHeader } from "../utils";
import Footer from "../componets/shared/Footer";

const FirstClass = ({navigation}: ScreenProps) => {
    const { onScroll, containerPaddingTop, scrollIndicatorInsetTop } = parcialHeader();
    const [index, setIndex] = useState<TabIndex>(TabIndex.first);
    const scrollRef = React.createRef<ScrollView>();

    return(
        <Animated.ScrollView
        onScroll={onScroll}
        contentContainerStyle={{ paddingTop: containerPaddingTop }}
        scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
        ref={scrollRef}
        >
            <Text>First Class</Text>
            <Footer
                currentTabIndex={index}
                changeTab={(indexToChange) => changeTab(indexToChange, setIndex, scrollRef)}
                prevClass={() => navigation.navigate('IntroClass')}
                nextClass={() => navigation.navigate('SecondClass')}/>
        </Animated.ScrollView>
    );
};

export default FirstClass;