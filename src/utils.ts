import { NativeScrollEvent, NativeSyntheticEvent, ScrollView } from "react-native";

import { useCollapsibleHeader } from "react-navigation-collapsible";
import Header from "./componets/shared/Header";
import { TabIndex } from "./types";

type HeaderProps = {
    onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
    containerPaddingTop: number;
    scrollIndicatorInsetTop: number;
}

export const parcialHeader = (): HeaderProps => {
    const { onScroll, containerPaddingTop, scrollIndicatorInsetTop } =
    useCollapsibleHeader({
        navigationOptions: {
            header: Header,
        },
    });
    return {onScroll, containerPaddingTop, scrollIndicatorInsetTop};
};

export const changeTab = (
    indexToChange: TabIndex,
    setIndex: (value: TabIndex) => void,
    scrollRef: React.RefObject<ScrollView>
) => {
    setIndex(indexToChange);
    scrollRef.current?.scrollTo({y: 0, animated: true});
};

export const formatQueryResults = (sqlResults: Array<any>) => {
    const rows: Array<Object> = [];

    sqlResults.forEach(result => {
        for (let index = 0; index < result.rows.length; index++) {
            const newRow = result.rows.item(index);
            const reverseKeys = Object.keys(newRow).reverse();
            const rowToShow = {};

            reverseKeys.forEach(key => (rowToShow[key as keyof Object] = newRow[key]));

            rows.push(rowToShow);
        }
    });

    return rows;
};