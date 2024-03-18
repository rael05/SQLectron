import React, { useState } from "react";
import { Animated, ScrollView, Text } from "react-native";

import { ScreenProps, TabIndex } from "../types";
import { changeTab, parcialHeader } from "../utils";
import Footer from "../componets/shared/Footer";

const SecondClass = ({navigation}: ScreenProps) => {
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
            <Text>Second Class</Text>
            <Footer
                currentTabIndex={index}
                changeTab={(indexToChange) => changeTab(indexToChange, setIndex, scrollRef)}
                prevClass={() => navigation.navigate('FirstClass')}/>
        </Animated.ScrollView>
    );
};

export default SecondClass;