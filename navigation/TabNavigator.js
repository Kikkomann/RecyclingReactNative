import React from 'react';
import { createStackNavigator } from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

import Colors from "../constants/Colors"

const HomeStack = createStackNavigator({
	Home: HomeScreen,
});

//TODO: Delete
// HomeStack.navigationOptions = {
// 	tabBarLabel: 'Home',
// 	headerStyle:{
// 		backgroundColor: 'black'
// 	},
// }

const InfoStack = createStackNavigator({
	Info: LoginScreen,
});

const optionsForTabBar = {
    color: 'white',
    labelStyle: {
    	fontSize: 12,
    },
    style: {
    	backgroundColor: 'black',
    },
}

export default createMaterialBottomTabNavigator({
		Home: {screen: HomeStack},
		Info: {screen: InfoStack}
	},
	{
  		initialRouteName: 'Home',
  		title: 'sdkfh',
  		activeColor: '#F44336',
  		barStyle: {
  			backgroundColor: Colors.tabBar}
	},
	// {
	// 	tabBarOptions: optionsForTabBar,
	// 	// navigationOptions: {
	// 	// 	title: 'Rune'
	// 	// }
	// }
);