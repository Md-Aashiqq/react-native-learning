/* eslint-disable prettier/prettier */

import React from "react"
import { Dimensions, StyleSheet, Text, View } from "react-native"

const { width, height } = Dimensions.get("window")

export const SLIDE_HEIGHT = 0.71 * height

interface SlideProps {
    // eslint-disable-next-line @typescript-eslint/ban-types
    label: String,
    right?: boolean
}

const Slide = ({ label, right }: SlideProps) => {
    const transform = [{ translateY: (SLIDE_HEIGHT / SLIDE_HEIGHT), },
    { translateX: right ? width / 2 - 120 : -width / 2 + 120 }
        , { rotate: right ? "-90deg" : "90deg" }]
    return (
        <View style={[styles.container, { transform }]}>
            <View style={[styles.titleContainer]}>
                <Text style={styles.titleText}>{label}</Text>
            </View>

        </View>
    )
}

export default Slide

const styles = StyleSheet.create({
    container: {
        width
    },
    titleContainer: {
        height: 100,
        justifyContent: "center"
    },
    titleText: {
        fontSize: 70,
        lineHeight: 70,
        color: "white",
        textAlign: "center"
    }

})
