/* eslint-disable prettier/prettier */
import React from "react"
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { Feather as Icon } from "@expo/vector-icons"


// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

import theme, { Box } from "../../../components/Theme";

interface customInputProps extends TextInputProps {
    icon: string,
    error?: string,
    touched?: boolean
}

const CustomTextInput = ({ icon, touched, error, ...props }: customInputProps) => {

    // eslint-disable-next-line no-nested-ternary
    const color = !touched ? "sliderGrey" : error ? "danger" : "primary";
    const iconColor = theme.colors[color]
    return (

        <Box height={48} borderRadius="s" borderColor={color} borderWidth={StyleSheet.hairlineWidth}
            flexDirection="row" alignItems="center">
            <Box padding="s">
                <Icon name={icon} size={16} color={iconColor} />
            </Box>
            <Box flex={1}>
                <TextInput underlineColorAndroid="transparent"
                    {...props} />
            </Box>
            <Box padding="s">
                {touched && (
                    <Box justifyContent="center" alignItems="center"
                        borderRadius="m" backgroundColor={(!error ? "primary" : "danger")}
                        width={theme.borderRadii.m * 2} height={theme.borderRadii.m * 2}>
                        <Icon name={!error ? "check" : "x"} color="white" size={16} />
                    </Box>
                )}
            </Box>
        </Box>

    )
}

export default CustomTextInput
