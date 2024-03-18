import { DrawerNavigationProp } from '@react-navigation/drawer';

export type StackParamList = {
    IntroClass: undefined;
    FirstClass: undefined;
    SecondClass: undefined;
};

export type ScreenProps = {
    navigation: DrawerNavigationProp<StackParamList>;
};

export enum TabIndex {
    first,
    last
};