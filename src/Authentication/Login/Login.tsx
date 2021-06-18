/* eslint-disable prettier/prettier */
import React from "react"
import { Formik } from "formik"
import * as Yup from "yup";

import { Container, CustomButton } from "../../components";
import { Box, Text } from "../../components/Theme";
import CustomCheckBox from "../Components/Forms/CustomCheckBox";
import CustomTextInput from "../Components/Forms/CustomTextInput";
import { SocialMedia } from "../Components/index"

const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
});

const Footer = () => {
    return (

        <>
            <SocialMedia />

            <Box justifyContent="center" alignItems="center">
                <CustomButton variant="transparent" onPress={() => true}>
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

const Login = () => {
    return (

        <Container footer={<Footer />} >

            <Box padding="xl">

                <Text variant="title1" textAlign="center"> Welcome Back</Text>
                <Text variant="description" textAlign="center"> Welcome Back to Your Login Accout</Text>
                <Formik
                    initialValues={{ email: "", password: "", remember: false }}
                    onSubmit={values => console.log(values)}
                    validationSchema={LoginSchema}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
                        <Box>
                            <Box marginBottom="m" marginTop="l">
                                <CustomTextInput
                                    icon="mail" placeholder="Enter Your Email"
                                    onChangeText={handleChange("email")}
                                    onBlur={handleBlur("email")} value={values.email}
                                    error={errors.email}
                                    touched={touched.email}
                                />
                            </Box>

                            <CustomTextInput
                                icon="lock" placeholder="Enter Your Password"
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")} value={values.password}
                                error={errors.password}
                                touched={touched.password}
                            />

                            <Box flexDirection="row" justifyContent="space-between" marginTop="m">
                                <CustomCheckBox label="Remember Me" checked={values.remember}
                                    onChange={() => setFieldValue("remember", !values.remember)} />
                                <CustomButton variant="transparent"
                                    onPress={() => true}>

                                    <Text variant="description" color="primary">
                                        Forget Password ?
                                    </Text>
                                </CustomButton>
                            </Box>

                            <Box justifyContent="center" alignItems="center" marginTop="m">
                                <CustomButton label="Login" variant="primary" onPress={handleSubmit} />

                            </Box>
                        </Box>
                    )}
                </Formik>

            </Box>
        </Container>

    )
}

export default Login

