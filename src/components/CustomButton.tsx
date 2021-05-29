/* eslint-disable prettier/prettier */
import React, { ReactChild } from "react"
import { StyleSheet, Text, View } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import { useTheme } from "@shopify/restyle"

import { Theme } from "./Theme"
interface ButtonProps {
    label?: string,
    variant: "default" | "primary" | "transparent",
    onPress?: () => void;
    children?: ReactChild
}

const CustomButton = ({ label, variant, onPress, children }: ButtonProps) => {

    const theme = useTheme<Theme>()

    // eslint-disable-next-line no-nested-ternary
    const backgroundColor = (variant === "primary") ?
        theme.colors.primary : (variant === "default") ? theme.colors.defaultButton : "transparent";
    const color = (variant === "primary") ? theme.colors.white : theme.colors.title1Color;

    return (
        <RectButton style={[styles.button, { backgroundColor }]} {...{ onPress }}>
            {children ? children : <View>
                <Text style={[styles.buttonLabel, { color }]} >{label}</Text>
            </View>}
        </RectButton>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        width: 225,
        height: 50,
        justifyContent: "center",
        padding: 10,
        alignItems: "center",

    },
    buttonLabel: {
        fontSize: 15,
        textAlign: "center"
    }
})
