/* eslint-disable prettier/prettier */
import React from "react"
import { Image, Dimensions } from "react-native"

import { CustomButton } from "../../components"
import { Routes, StackNavigationProps } from "../../components/Navigation"
import theme, { Box, Text } from "../../components/Theme"

const { width } = Dimensions.get("window")

const Welcome = ({ navigation }: StackNavigationProps<Routes, "OnBoarding">) => {

    const picture = {
        src: require("../../../assets/4.png"),
        width: 3000,
        height: 4500
    }

    return (

        <Box flex={1}>
            <Box flex={1} backgroundColor="sliderGrey" borderBottomRightRadius="xl" alignItems="center"
                justifyContent="flex-end">
                <Image source={picture.src} style={{
                    width: width - theme.borderRadii.xl,
                    height: ((width - theme.borderRadii.xl) * picture.height) / picture.width
                }} />
            </Box>
            <Box flex={1} borderTopLeftRadius="xl">

                <Box backgroundColor="sliderGrey" position="absolute" top={0} bottom={0} left={0} right={0} />
                <Box backgroundColor="white" flex={1}
                    borderTopLeftRadius="xl" justifyContent="space-evenly" alignItems="center" padding="xl" >
                    <Text variant="title1" color="title1Color" >
                        Lets get Started
                    </Text>
                    <Text variant="description" color="title1Color">
                        Login to your account below or signup for amazing experience
                    </Text>
                    <CustomButton label={"Login to your Account"} variant="primary"
                        onPress={() => navigation.navigate("Login")} />
                    <CustomButton label={"Signup to your Account"} variant="default" />
                    <CustomButton label={"Forget Password"} variant="transparent" />
                </Box>

            </Box>
        </Box>

    )
}

export default Welcome

// const styles = StyleSheet.create({})

//  ...StyleSheet.absoluteFillObject,
//     width: undefined,
//         height: undefined,