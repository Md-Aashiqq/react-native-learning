/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnBoarding from "./src/Authentication/OnBoarding"

const AuthunticationStack = createStackNavigator()

const AthunticationNavigotor = () => {

  return (
    <AuthunticationStack.Navigator headerMode="none">
      <AuthunticationStack.Screen name="OnBoarding" component={OnBoarding} />
    </AuthunticationStack.Navigator>
  )

}

export default function App() {
  return (
    <NavigationContainer>
      <AthunticationNavigotor />
    </NavigationContainer>
  );
}