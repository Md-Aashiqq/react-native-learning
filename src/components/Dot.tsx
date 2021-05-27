/* eslint-disable prettier/prettier */
import React from "react"
import { Dimensions } from "react-native";
import Animated, {
    Extrapolate,
    interpolate, useAnimatedStyle, useDerivedValue,
} from "react-native-reanimated";

const { width } = Dimensions.get("window")

interface DotProps {
    index: number,
    currentIndex: Animated.SharedValue<number>
}

const Dot = ({ index, currentIndex }: DotProps) => {

    const x = useDerivedValue(() => {
        const y = Math.round(currentIndex.value / width)
        return y
    })
    const animationDot = useAnimatedStyle(() => {
        const opacity = interpolate(x.value, [index - 1, index, index + 1], [0.5, 1, 0.5], Extrapolate.CLAMP)
        const scale = interpolate(x.value, [index - 1, index, index + 1], [1, 1.25, 1], Extrapolate.CLAMP)
        return {
            opacity,
            transform: [{ scale }]
        }
    })

    return (
        <Animated.View style={[{
            margin: 4
            , backgroundColor: "#2cb9b0", width: 8, height: 8, borderRadius: 14
        }, animationDot]} />


    )
}

export default Dot
