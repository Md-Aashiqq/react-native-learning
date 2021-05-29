/* eslint-disable prettier/prettier */
import React from "react"
import { StyleSheet, View } from "react-native";

import { CustomButton } from "../../components"
import { Text } from "../../components/Theme";


interface SubslideProps {
    subtitle: string,
    description: string,
    last?: boolean,
    onPress: () => void;
}

const Subslide = ({ subtitle, last, description, onPress }: SubslideProps) => {
    return (
        <View style={styles.container} >
            <Text variant="title1">{subtitle}</Text>
            <Text variant="description" >{description}</Text>
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

})
