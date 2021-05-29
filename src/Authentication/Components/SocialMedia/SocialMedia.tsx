/* eslint-disable prettier/prettier */
import React from "react";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

import theme, { Box } from "../../../components/Theme";



const SocialMedia = () => {
    return (

        <Box justifyContent="space-evenly" alignItems="center" flexDirection="row" margin="s">

            <Box margin="s">
                <AntDesign name="google" size={theme.borderRadii.l} color="white" />

            </Box>
            <Box margin="s">
                <AntDesign name="facebook-square" size={theme.borderRadii.l} color="white" />
            </Box>
            <Box margin="s">
                <FontAwesome5 name="app-store-ios" size={theme.borderRadii.l} color="white" />
            </Box>
        </Box >

    )
}

export default SocialMedia
