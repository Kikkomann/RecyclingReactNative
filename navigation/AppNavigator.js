import { createSwitchNavigator, createStackNavigator } from "react-navigation";

import LoginScreen from "../containers/LoginScreen";

import TabNavigator from "./TabNavigator";
import AuthLoading from "./AuthLoadingScreen";

const AuthStack = createStackNavigator({
    SignIn: LoginScreen
});

export default createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        Auth: AuthStack,
        App: TabNavigator
    },
    {
        initialRouteName: "AuthLoading"
    }
);
