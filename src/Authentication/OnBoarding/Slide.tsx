/* eslint-disable prettier/prettier */

import React from "react"
import { Dimensions, StyleSheet, View, Image } from "react-native"

const { width, height } = Dimensions.get("window")

import { Text } from "../../components/Theme"

export const SLIDE_HEIGHT = 0.71 * height

interface SlideProps {
    // eslint-disable-next-line @typescript-eslint/ban-types
    label: String,
    right?: boolean,
    picture: number
}

const Slide = ({ label, right, picture }: SlideProps) => {
    const transform = [{ translateY: (SLIDE_HEIGHT - 100) / 2, },
    { translateX: right ? -width / 2 + 50 : width / 2 - 50 }
        , { rotate: right ? "90deg" : "-90deg" }]
    return (
        <View style={[styles.container]}>
            <View style={styles.underlay}>
                <Image source={picture} style={styles.picture} />
            </View>

            <View style={[styles.titleContainer, { transform }]}>
                <Text variant="hero">{label}</Text>
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
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
    },
    picture: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
    }

})

