/* eslint-disable prettier/prettier */

import { ParamListBase, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export interface StackNavigationProps<
    ParamList extends ParamListBase,
    RouterName extends keyof ParamList = string
    > {
    navigation: StackNavigationProp<ParamList, RouterName>;
    route: RouteProp<ParamList, RouterName>
}

export type Routes = {
    OnBoarding: undefined;
    Welcome: undefined;
    Login: undefined;
};

