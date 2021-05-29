/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { createBox, createText, createTheme } from '@shopify/restyle'

const palette = {
    purpleLight: '#8C6FF7',
    purplePrimary: '#5A31F4',
    purpleDark: '#3F22AB',

    greenLight: '#56DCBA',
    greenPrimary: '#0ECD9D',
    greenDark: '#0A906E',
    danger: "red",
    primary: "#2cb9b0",
    default: "rgba(12,13,52,0.05)",
    lightblack: "#0c0d34",
    black: '#0B0B0B',
    white: '#F0F2F3',
    slideGrey: "rgb(217, 215, 215)"
};


const theme = createTheme({
    colors: {
        mainBackground: palette.white,
        cardPrimaryBackground: palette.purplePrimary,
        heroTextColor: palette.white,
        title1Color: palette.lightblack,
        secondary: palette.lightblack,
        primary: palette.primary,
        defaultButton: palette.default,
        white: palette.white,
        sliderGrey: palette.slideGrey,
        danger: palette.danger
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    textVariants: {
        hero: {
            fontSize: 70,
            lineHeight: 70,
            color: "heroTextColor",
            textAlign: "center"
        },
        title1: {
            fontSize: 28,
            lineHeight: 30,

            textAlign: "center",
            color: "title1Color",
        },
        title2: {
            fontSize: 24,

            color: "title1Color",
        },
        description: {
            fontSize: 16,
            lineHeight: 24,
            color: "title1Color",

        }
    },
    borderRadii: {
        s: 4,
        m: 10,
        l: 25,
        xl: 75,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
});
export const Box = createBox<Theme>();
export const Text = createText<Theme>();


export type Theme = typeof theme;
export default theme;