import { DrawerNavigationProp } from '@react-navigation/drawer';

export type StackParamList = {
    IntroClass: undefined;
    FirstClass: undefined;
    SecondClass: undefined;
    ThirdClass: undefined;
    FourthClass: undefined;
    FirstReview: undefined;
    SixthClass: undefined;
    SeventhClass: undefined;
    EighthClass: undefined;
    NinthClass: undefined;
    TenthClass: undefined;
    EleventhClass: undefined;
    TwelfthClass: undefined;
    ThirteenthClass: undefined;
    FourteenthClass: undefined;
    FifteenthClass: undefined;
    SixteenthClass: undefined;
    SeventeenthClass: undefined;
    EighteenthClass: undefined;
};

export type ScreenProps = {
    navigation: DrawerNavigationProp<StackParamList>;
};

export enum TabIndex {
    first,
    last
};

export const tipsSideMenu: Array<string> = [
    "Cada error es una oportunidad de aprendizaje. ¡No temas cometerlos, abrázalos y aprende de ellos!",
    "La programación es como aprender un nuevo idioma. Cuanto más practiques, más fluido te volverás.",
    "El camino hacia la maestría en programación está pavimentado con pequeños logros diarios. Cada línea de código cuenta.",
    "No importa cuántas veces tropieces, lo importante es levantarte y seguir adelante. La perseverancia es clave en la programación.",
    "La programación es un arte en constante evolución. ¡No te desanimes si las cosas no funcionan a la primera!",
    "Cada programa que escribes es un paso más hacia tu objetivo. Cada línea de código te acerca un poco más a tus sueños.",
    "La comunidad de programadores es un recurso invaluable. No dudes en pedir ayuda cuando la necesites, estamos aquí para apoyarnos mutuamente.",
    "Celebra tus pequeños éxitos en el código. Cada programa que funcione correctamente es motivo de celebración.",
    "La creatividad es tan importante como la lógica en la programación. No tengas miedo de explorar nuevas ideas y soluciones.",
    "Recuerda siempre por qué empezaste a programar. Mantén viva tu pasión y nunca dejes de aprender y crecer en este fascinante campo.",
];