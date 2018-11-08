import React from 'react';
import {
  View,
  Text
} from 'react-native';
import firebase from 'react-native-firebase';

import Styles from '../styles/styles';
import strings from '../constants/strings';

export default class Travel extends React.Component {
  	render() {
  // 		var ref = firebase.database().ref("Users/runehouthode");
  // 		console.log("firebase.database().ref(\"Users/runehouthode\"): " + ref);
		// ref.once("value")
  // 		.then(function(snapshot) {
  // 	  		var key = snapshot.key; // "ada"
  // 	  		var childKey = snapshot.child("name/last").key; // "last"
  // 		});

  	let firebaseShowcase = "ref ...for now";

    return (
      <View>
      	  <Text>{firebaseShowcase}</Text>
      </View>
    );
  }

}