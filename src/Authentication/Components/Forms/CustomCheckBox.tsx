/* eslint-disable prettier/prettier */
import React from "react"
import { Feather as Icon } from "@expo/vector-icons"
import { RectButton } from "react-native-gesture-handler"

import { Box, Text } from "../../../components/Theme"


interface customCheckBoxProps {
    label: string,
    checked: boolean,
    onChange: () => void;
}

const CustomCheckBox = ({ label, checked, onChange }: customCheckBoxProps) => {

    return (

        <RectButton onPress={onChange} style={{ justifyContent: "center" }}>
            <Box flexDirection="row" alignItems="center">
                <Box marginRight="m" height={20} width={20} borderRadius="s" justifyContent="center"
                    alignItems="center" borderWidth={1} borderColor="primary"
                    backgroundColor={checked ? "primary" : "white"}
                >
                    <Icon name="check" color="white" />
                </Box>
                <Text variant="description"> {label} </Text>
            </Box>
        </RectButton>

    )
}

export default CustomCheckBox
