/* eslint-disable prettier/prettier */
import React, { ReactNode } from "react";
import { Image, StyleSheet, Dimensions, StatusBar, } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

import theme, { Box } from "./Theme";



interface containerProps {
    children: ReactNode,
    footer: ReactNode,

}

const assets = [require("../../assets/pattern.png")]

const { width } = Dimensions.get("window")
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;
const Container = ({ children, footer }: containerProps) => {
    return (



        <Box flex={1} backgroundColor="secondary">
            <StatusBar barStyle="light-content" />
            <Box backgroundColor="white">
                <Box borderBottomLeftRadius="xl" overflow="hidden" height={height * 0.61}>

                    <Image source={assets[0]}
                        style={{ width, height, borderBottomLeftRadius: theme.borderRadii.xl }} />

                </Box>
            </Box>
            <Box flex={1}>
                <Image source={assets[0]} style={{
                    ...StyleSheet.absoluteFillObject,
                    width, height,

                }} />
                <Box borderRadius="xl" borderTopLeftRadius={0} backgroundColor="white" flex={1} >
                    <KeyboardAwareScrollView>
                        {children}
                    </KeyboardAwareScrollView>
                </Box>

            </Box>
            <Box backgroundColor="secondary">
                {footer}
            </Box>
        </Box >




    )
}

export default Container
