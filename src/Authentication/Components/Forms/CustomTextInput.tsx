/* eslint-disable prettier/prettier */
import React, { useState } from "react"
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { Feather as Icon } from "@expo/vector-icons"


// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

import theme, { Box } from "../../../components/Theme";



const Valid = true;
const Invalid = false;
const Pristine = null;

type InputState = typeof Valid | typeof Invalid | typeof Pristine

interface customInputProps extends TextInputProps {
    icon: string,
    validator: (input: string) => boolean;
}

const CustomTextInput = ({ icon, placeholder, validator }: customInputProps) => {

    const [state, setState] = useState<InputState>(Pristine)
    const [text, setText] = useState("")

    const onChangeText = (text: string) => {
        setText(text);
        if (state !== Pristine) {
            validate()
        }
    }

    const validate = () => {
        const vaild = validator(text);
        setState(vaild)
    }

    // eslint-disable-next-line no-nested-ternary
    const color = state === Pristine ? "sliderGrey" : state === Valid ? "primary" : "danger";
    const iconColor = theme.colors[color]
    return (

        <Box height={48} borderRadius="s" borderColor={color} borderWidth={StyleSheet.hairlineWidth}
            flexDirection="row" alignItems="center">
            <Box padding="s">
                <Icon name={icon} size={16} color={iconColor} />
            </Box>
            <Box flex={1}>
                <TextInput underlineColorAndroid="transparent"
                    onBlur={validate} {...{ onChangeText }} {...{ placeholder }} />
            </Box>
            <Box padding="s">
                {(state === Valid || state === Invalid) && (
                    <Box justifyContent="center" alignItems="center"
                        borderRadius="m" backgroundColor={(state === Valid ? "primary" : "danger")}
                        width={theme.borderRadii.m * 2} height={theme.borderRadii.m * 2}>
                        <Icon name={state === Valid ? "check" : "x"} color="white" size={16} />
                    </Box>
                )}
            </Box>
        </Box>

    )
}

export default CustomTextInput
