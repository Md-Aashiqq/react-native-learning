/* eslint-disable prettier/prettier */
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { RectButton } from "react-native-gesture-handler"

interface ButtonProps {
    label: string,
    variant: "default" | "primary",
    onPress: () => void
}

const CustomButton = ({ label, variant, onPress }: ButtonProps) => {

    const backgroundColor = (variant === "primary") ? "#2cb9b0" : "rgba(12,13,52,0.05)";
    const color = (variant === "primary") ? "white" : "#0c0d34";

    return (
        <RectButton style={[styles.button, { backgroundColor }]}{...{ onPress }} >
            <View>
                <Text style={[styles.buttonLabel, { color }]} >{label}</Text>
            </View>
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
        alignItems: "center"

    },
    buttonLabel: {
        fontSize: 15,
        textAlign: "center"
    }
})
