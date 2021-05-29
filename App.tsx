/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@shopify/restyle"

import OnBoarding from "./src/Authentication/OnBoarding"
import Welcome from "./src/Authentication/Welcome"
import { theme } from "./src/components"
import { Routes } from './src/components/Navigation';
import Login from './src/Authentication/Login';
const AuthunticationStack = createStackNavigator<Routes>()

const AthunticationNavigotor = () => {

  return (
    <ThemeProvider theme={theme}>
      <AuthunticationStack.Navigator headerMode="none">
        <AuthunticationStack.Screen name="OnBoarding" component={OnBoarding} />
        <AuthunticationStack.Screen name="Welcome" component={Welcome} />
        <AuthunticationStack.Screen name="Login" component={Login} />
      </AuthunticationStack.Navigator>
    </ThemeProvider>
  )

}

export default function App() {
  return (

    <NavigationContainer>
      <AthunticationNavigotor />
    </NavigationContainer>

  );
}