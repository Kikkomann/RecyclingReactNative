import React, { Component } from "react";
import {
   ListView,
   Text,
   TextInput,
   Picker,
   View,
   ScrollView,
   Button
} from "react-native";

import styles from "../styles/styles";
import firebase, { crashlytics } from "react-native-firebase";


export default class HomeScreen extends Component {
   constructor(props) {
      super(props);

      this.state = {
         dataSource: [{ title: "Test", _key: "keyTest" }]
      };
      this.hubsRef = firebase
         .app()
         .database()
         .ref("Hub");

      this.onCodeEntered = this.onCodeEntered.bind(this);
   }

   onCodeEntered() {
      firebase.crashlytics().crash();
   }

   componentDidMount() {
      this.listenForItems(this.hubsRef);
   }

   listenForItems(itemsRef) {
         itemsRef.once("value", snap => {
            // get children as an array
            var items = [];
            snap.forEach(child => {
               items.push({
                  title: child.val().Name,
                  _key: child.key
               });
            });
            this.setState({
               dataSource: items
            });
         });
      }

   render() {
      return (
         <View style={styles.container}>
            {/* <ScrollView keyboardShouldPersistTaps="handled">
               <TextInput
                  onBlur={() => console.log("blur")}
                  style={{ borderColor: "black", borderWidth: 2 }}
                  keyboardType="numeric"
                  maxLength={7}
               />
            </ScrollView> */}
            <Picker
               style={{ height: 50, width: 100 }}
               /*onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}*/
            >
               {this.state.dataSource.map((item, index) => {
                  return (
                     <Picker.Item
                        label={item.title}
                        value={item.title}
                        key={item._key}
                     />
                  );
               })}
            </Picker>
            <Button title="Tryk" onPress={this.onCodeEntered} />
         </View>
      );
   }
}
