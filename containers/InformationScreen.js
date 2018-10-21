import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Platform,
  Text,
  TextInput,
  Image,
  View,
} from 'react-native';
import InfoBar from '../components/InfoBar';

import styles from '../styles/styles';

export default class InformationScreen extends React.Component {
  render() {
    let st = 'Haaalløøøøj!';
    return (
      <View style={styles.container}>
        <InfoBar text={st} />
      </View>
    );
  }
}