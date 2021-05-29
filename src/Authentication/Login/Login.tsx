/* eslint-disable prettier/prettier */
import React from "react"
import { Alert } from "react-native";



import { Container, CustomButton } from "../../components";
import { Box, Text } from "../../components/Theme";
import CustomCheckBox from "../Components/Forms/CustomCheckBox";
import CustomTextInput from "../Components/Forms/CustomTextInput";
import { SocialMedia } from "../Components/index"


const Footer = () => {
    return (

        <>
            <SocialMedia />

            <Box justifyContent="center" alignItems="center">
                <CustomButton variant="transparent" onPress={() => Alert.alert("asdsadd")}>
                    <Box flexDirection="row" justifyContent="center" alignItems="center">
                        <Text variant="description" color="white" margin="s">
                            Dont have account?
                </Text>
                        <Text variant="description" color="primary" margin="s">
                            Sign Up
                </Text>
                    </Box>
                </CustomButton>
            </Box>
        </>

    )
}

const emailValidator = (email: string) => {
    // eslint-disable-next-line max-len
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const passwordValidator = (password: string) => {
    return password.length >= 6;
}

const Login = () => {
    return (

        <Container footer={<Footer />} >

            <Box padding="xl">

                <Text variant="title1" textAlign="center"> Welcome Back</Text>
                <Text variant="description" textAlign="center"> Welcome Back to Your Login Accout</Text>

                <Box marginBottom="m" marginTop="l">
                    <CustomTextInput icon="mail" placeholder="Enter Your Email" validator={emailValidator} />

                </Box>

                <CustomTextInput icon="lock" placeholder="Enter Your Password" validator={passwordValidator} />

                <Box flexDirection="row" justifyContent="space-between" marginTop="m">
                    <CustomCheckBox label="Remember Me" />
                    <CustomButton variant="transparent"
                        onPress={() => Alert.alert("forget")}>

                        <Text variant="description" color="primary">
                            Forget Password ?
                    </Text>
                    </CustomButton>
                </Box>

                <Box justifyContent="center" alignItems="center" marginTop="m">
                    <CustomButton label="Login" variant="primary" onPress={() => Alert.alert("login")} />

                </Box>

            </Box>
        </Container>

    )
}

export default Login

