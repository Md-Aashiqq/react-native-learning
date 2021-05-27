/* eslint-disable prettier/prettier */
import React from "react"
import { StyleSheet, Text, View } from "react-native";

import { CustomButton } from "../../components"


interface SubslideProps {
    subtitle: string,
    description: string,
    last?: boolean,
    onPress: () => void;
}

const Subslide = ({ subtitle, last, description, onPress }: SubslideProps) => {
    return (
        <View style={styles.container} >
            <Text style={styles.subtitle} >{subtitle}</Text>
            <Text style={styles.description}>{description}</Text>
            <CustomButton {...{ onPress }}
                label={last ? "Let's get started" : "Next"} variant={(last ? "primary" : "default")} />
        </View>
    )
}

export default Subslide

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    subtitle: {
        fontSize: 24,
        lineHeight: 30,
        marginBottom: 6,
        textAlign: "center",
        color: "#0c0d34",
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: "#0c0d34",
        textAlign: "center",
        marginBottom: 20
    }
})
