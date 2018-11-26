import { createSwitchNavigator, createStackNavigator } from "react-navigation";

import LoginScreen from "../containers/LoginScreen";

import TabNavigator from "./TabNavigator";
import AuthLoading from "./AuthLoadingScreen";

const AuthStack = createStackNavigator({
    SignIn: LoginScreen,
});

export default createSwitchNavigator(
    {
        // You could add another route here for authentication.
        // Read more at https://reactnavigation.org/docs/en/auth-flow.html
        AuthLoading: AuthLoading,
        Auth: AuthStack,
        App: TabNavigator
    },
    {
        initialRouteName: "AuthLoading"
        // initialRouteName: 'App',
    }
);
