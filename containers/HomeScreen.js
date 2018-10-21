import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Platform,
  Text,
  TextInput,
  Image,
  View,
} from 'react-native';

import styles from '../styles/styles';

export default class HomeScreen extends Component {
  render() {
    let someString = "____________TestString____________"
    return (
      <View style={styles.container}>
        <Text>{someString}</Text>
        <Text> Here on my home screen I have some text </Text>
      </View>
    );
  }
}