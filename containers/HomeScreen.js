import React, { Component } from "react";
import { connect } from 'react-redux';
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
import firebase from "react-native-firebase";

import { fetchHubs } from '../actions/hubs/getAll';

class HomeScreen extends Component {
   constructor(props) {
      super(props);

      this.state = {
         dataSource: ["null", "æsdfkh"],
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
            //TODO: Her skal sendes action. 
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
                  //TODO: husk at lave om, så de passer med, hvad der skal hentes- også i reducer og action-payload
                  return (
                     <Picker.Item
                        label={item}
                        value={item}
                        key={Math.random()}
                     />
                  );
               })}
            </Picker>
            <Button title="Tryk" onPress={this.onCodeEntered} />
         </View>
      );
   }
}

const mapStateToProps = state => ({
   dataSource: state.dataSource,
 });
 
 const mapDispatchToProps = {
   fetchHubs,
 };
 
 export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);