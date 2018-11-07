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
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

import styles from '../styles/styles';

export default class HomeScreen extends Component {
  render() {
    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
    return (
      <AreaChart
          style={{ height: 200 }}
          data={ data }
          contentInset={{ top: 30, bottom: 30 }}
          curve={ shape.curveNatural }
          svg={{ fill: 'rgba(134, 65, 244, 0.8)' }} >
          <Grid/>
      </AreaChart>
    );
  }
}








