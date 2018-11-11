import React, {Component} from 'react';
import AppNavigator from './navigation/AppNavigator';

import firebase from 'react-native-firebase';

type Props = {};
export default class App extends Component {
	
	componentWillMount() {
		if (!firebase.app()) {
			var config = {
            apiKey: "AIzaSyC-crBMuYAemS6uF-Yoa7w2ilLXZn2yTT8",
            authDomain: "trashapp-68982.firebaseapp.com",
            databaseURL: "https://trashapp-68982.firebaseio.com",
            projectId: "trashapp-68982",
            storageBucket: "",
        };
        firebase.initializeApp(config);
		}
		firebase.database().ref('Users').once('value', (data) => {
            console.log("\n\n" + data.toJSON() + "\n\n");
        });

        var adaNameRef = firebase.database().ref('Users/ada/name');
		adaNameRef.child('first').set('Ada');
		adaNameRef.child('last').set('Lovelace');
	}

  	render() {
  		return <AppNavigator/>;
  	}
}
