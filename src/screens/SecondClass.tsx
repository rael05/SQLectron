import React from "react";
import { Animated, Text } from "react-native";

import { ScreenProps } from "../types";
import { parceHeader } from "../utils";

const SecondClass = ({navigation}: ScreenProps) => {
    const { onScroll, containerPaddingTop, scrollIndicatorInsetTop } = parceHeader();

    return(
        <Animated.ScrollView
        onScroll={onScroll}
        contentContainerStyle={{ paddingTop: containerPaddingTop }}
        scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
        >
            <Text>Second Class</Text>
        </Animated.ScrollView>
    );
};

export default SecondClass;