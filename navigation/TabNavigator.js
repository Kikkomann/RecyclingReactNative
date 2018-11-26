import React from "react";
import {
   createStackNavigator,
   createBottomTabNavigator
} from "react-navigation";
//TODO Fjern, hvis jeg klarer det fint uden:
// import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import HomeScreen from "../containers/HomeScreen";
import InformationScreen from "../containers/InformationScreen";
import AddTrashScreen from "../containers/AddFractionScreen";

import TabBarIcon from "../components/TabBarIcon";

import Colors from "../constants/Colors";

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
      Dump: AddTrashStack,
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
