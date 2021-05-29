/* eslint-disable prettier/prettier */
import React, { ReactNode } from "react"
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native"

interface KeyboardAvoidProps {
    children: ReactNode
}

const KeyboardAvoidIngWrapper = ({ children }: KeyboardAvoidProps) => {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default KeyboardAvoidIngWrapper
