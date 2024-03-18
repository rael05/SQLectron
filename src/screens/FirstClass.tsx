import React from "react";
import {Text, Animated} from "react-native";

import { ScreenProps } from "../types";
import { parceHeader } from "../utils";

const FirstClass = ({navigation}: ScreenProps) => {
    const { onScroll, containerPaddingTop, scrollIndicatorInsetTop } = parceHeader();

    return(
        <Animated.ScrollView
        onScroll={onScroll}
        contentContainerStyle={{ paddingTop: containerPaddingTop }}
        scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
        >
            <Text>First Class</Text>
        </Animated.ScrollView>
    );
};

export default FirstClass;