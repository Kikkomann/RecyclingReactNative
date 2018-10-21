import React from 'react';
import {
  Text,
} from 'react-native';

import Colors from '../constants/Colors';
import styles from '../styles/styles';

export default class InfoBarText extends React.Component {
  render() {
      let stylesArray = [styles.infoBarFont];
      if (this.props.withBorder) {stylesArray.push(styles.infoBarBorder)}
      return (
          <Text style={stylesArray}>
  		        {this.props.text}
  		    </Text>
      );
  }

}
