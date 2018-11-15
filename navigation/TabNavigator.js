import React from "react";
import {
   createStackNavigator,
   createBottomTabNavigator
} from "react-navigation";
//TODO Fjern, hvis jeg klarer det fint uden:
// import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import HomeScreen from "../containers/HomeScreen";
import InformationScreen from "../containers/InformationScreen";

import TabBarIcon from "../components/TabBarIcon";

import Colors from "../constants/Colors";

const HomeStack = createStackNavigator({
   Home: HomeScreen
});

const InfoStack = createStackNavigator({
   Info: InformationScreen
});

export default createBottomTabNavigator(
   {
      Home: HomeStack,
      Info: InfoStack
   },
   {
      navigationOptions: ({ navigation }) => ({
         tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === "Info") {
               iconName = "info";
            } else if (routeName === "Home") {
               iconName = "home";
            }
            return <TabBarIcon name={iconName} size={23} color={tintColor} />;
         }
      }),
      tabBarOptions: {
         activeTintColor: Colors.white,
         inactiveTintColor: Colors.naestvedBlueDark,
         labelStyle: {
            fontSize: 13
         },
         style: {
            backgroundColor: Colors.tabBar
         }
      }
   },
   {
      barStyle: {
         backgroundColor: Colors.tabBar
      }
   }
);
