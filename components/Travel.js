import React from 'react';
import {
  View,
  Text,
  NetInfo
} from 'react-native';
import firebase from 'react-native-firebase';

import Styles from '../styles/styles';
import strings from '../constants/strings';

export default class Travel extends React.Component {
	componentWillMount() {
		let ref = firebase.database().ref("data/Users/pheng33");

		ref.set(
                {
                    name: 'Pheng Sengvuthy 004',
                    age: 24
                }
            ).then(function() {
            	debugger;
    console.log('Synchronization succeeded');
  })
  .catch(function(error) {
  	debugger;
    console.log('Synchronization failed');
  });
	}

  	render() {
  // 		var ref = firebase.database();
  // 		debugger;
  // 		var ref2 = ref.ref("Users/runehouthode");
  // 		var ref = firebase.database().ref("Users/runehouthode");
  // 		console.log("firebase.database().ref(\"Users/runehouthode\"): " + ref);
		// ref.once("value")
  // 		.then(function(snapshot) {
  // 	  		var key = snapshot.key; // "ada"
  // 	  		var childKey = snapshot.child("name/last").key; // "last"
  // 		});

  NetInfo.getConnectionInfo().then((connectionInfo) => {
  console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
});
function handleFirstConnectivityChange(connectionInfo) {
  console.log('First change, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
  NetInfo.removeEventListener(
    'connectionChange',
    handleFirstConnectivityChange
  );
}
NetInfo.addEventListener(
  'connectionChange',
  handleFirstConnectivityChange
);


  	let firebaseShowcase = "ref ...for now";

    return (
      <View>
      	  <Text>{firebaseShowcase}</Text>
      </View>
    );
  }

}