import React, { Component } from "react";
import { connect } from "react-redux";
import {
   ListView,
   Text,
   TextInput,
   Picker,
   View,
   ScrollView,
   Button,
   TouchableHighlight
} from "react-native";

import styles from "../styles/styles";
import firebase from "react-native-firebase";

import { getAllHubs } from "../actions/getAll";

class HomeScreen extends Component {
   constructor(props) {
      super(props);
      this.hubsRef = firebase
         .app()
         .database()
         .ref("Hub");

      this.onCodeEntered = this.onCodeEntered.bind(this);
   }

   onCodeEntered() {
      console.log("Not implemented");
      this.props.fetchHubs([Math.random(), Math.random()]);
      // firebase.crashlytics().crash();
   }

   componentDidMount() {
      //   this.listenForItems(this.hubsRef);
   }

   listenForItems(itemsRef) {
      try {
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
            debugger;
            console.log("ADjfhbad");
            this.props.getAllHubs(items);
            // this.setState({
            //    hubs: items
            // });
         });
      } catch (error) {
         console.log(error);
      }
   }

   render() {
      let { hubs } = this.props.hubs;
      let hubsFound = !!hubs.length;
      return (
         <View style={styles.container}>
            <Text>{hubs.toString()}</Text>
            {/* <ScrollView keyboardShouldPersistTaps="handled">
               <TextInput
                  onBlur={() => console.log("blur")}
                  style={{ borderColor: "black", borderWidth: 2 }}
                  keyboardType="numeric"
                  maxLength={7}
               />
            </ScrollView> */}
            {/* <Picker
               style={{ height: 50, width: 100 }}
               /*onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
            >
               {hubs.map((item, index) => {
                  return (
                     <Picker.Item
                        label={hubsFound ? item.title : "No hubs found"}
                        value={hubsFound ? item.title : "No hubs found"}
                        key={hubsFound ? item._key : -1}
                     />
                  );
               })}
            </Picker> */}
            <Button title="Tryk" onPress={this.onCodeEntered} />
         </View>
      );
   }
}

// HomeScreen.propTypes = {
//    decreaseCount: PropTypes.func.isRequired,
//    increaseCount: PropTypes.func.isRequired,
//    value: PropTypes.number.isRequired,
//  };

const mapStateToProps = state => ({
   hubs: state.hubs
});

const mapDispatchToProps = {
   fetchHubs: getAllHubs
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(HomeScreen);
