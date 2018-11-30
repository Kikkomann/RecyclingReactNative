import React from "react";
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";

import HomeScreen from "../containers/HomeScreen";
import InformationScreen from "../containers/InformationScreen";
import AddTrashScreen from "../containers/AddFractionScreen";

import TabBarIcon from "../components/TabBarIcon";

import Colors from "../constants/Colors";
import { styles, tabBarIconSize } from "../styles/styles";

const HomeStack = createStackNavigator({
    Home: HomeScreen
});

const InfoStack = createStackNavigator({
    Info: InformationScreen
});

const AddTrashStack = createStackNavigator({
    AddTrash: AddTrashScreen
});

export default createBottomTabNavigator(
    {
        Hjem: HomeStack,
        Info: InfoStack,
        Dump: AddTrashStack
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === "Info") {
                    iconName = "info";
                } else if (routeName === "Hjem") {
                    iconName = "home";
                } else if (routeName === "Dump") {
                    iconName = "trash";
                }
                return (
                    <TabBarIcon
                        name={iconName}
                        size={tabBarIconSize}
                        color={tintColor}
                    />
                );
            }
        }),
        tabBarOptions: {
            activeTintColor: Colors.white,
            inactiveTintColor: Colors.naestvedBlueDark,
            labelStyle: styles.tabBarFontSize,
            style: {
                backgroundColor: Colors.greenLightTheme
            }
        }
    },
    {
        barStyle: {
            backgroundColor: Colors.greenLightTheme
        }
    }
);
