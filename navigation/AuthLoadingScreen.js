// Taget fra: https://reactnavigation.org/docs/en/auth-flow.html

import React from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";

import { styles, ActivityIndicatorSize } from "../styles/styles";
import Colors from "../constants/Colors";

export default class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem("userToken");

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? "App" : "Auth");
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    style={styles.ActivityIndicator}
                    color={Colors.ActivityIndicatorColor}
                    size={ActivityIndicatorSize}
                />
                <StatusBar barStyle = "light-content" backgroundColor = {Colors.greenDarkTheme}/>
            </View>
        );
    }
}
