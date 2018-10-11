import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

// import LoginScreen from '../screens/LoginScreen';

import TabNavigator from './TabNavigator';

// const AuthStack = createStackNavigator({SignIn: LoginScreen});

export default createSwitchNavigator({
  	// You could add another route here for authentication.
  	// Read more at https://reactnavigation.org/docs/en/auth-flow.html
  	// Auth: AuthStack,
  	Main: TabNavigator,
	},
	{
		// Undersøg
    	// initialRouteName: 'AuthLoading',
    	initialRouteName: 'Main',
  	}
);