import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

import { useCollapsibleHeader } from "react-navigation-collapsible";
import Header from "./componets/shared/Header";

type HeaderProps = {
    onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
    containerPaddingTop: number;
    scrollIndicatorInsetTop: number;
}

export const parceHeader = (): HeaderProps => {
    const { onScroll, containerPaddingTop, scrollIndicatorInsetTop } =
    useCollapsibleHeader({
        navigationOptions: {
            header: Header,
        },
    });
    return {onScroll, containerPaddingTop, scrollIndicatorInsetTop};
};