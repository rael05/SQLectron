import { DrawerNavigationProp } from '@react-navigation/drawer';

type StackParamList = {
    IntroClass: undefined;
    FirstClass: undefined;
    SecondClass: undefined;
};

export type ScreenProps = {
    navigation: DrawerNavigationProp<StackParamList>;
};