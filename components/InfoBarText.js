import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Colors from '../constants/Colors';
import { styles } from '../styles/styles';

export default class InfoBarText extends React.Component {
  constructor(props) {
    super(props)
  }
  
  _onTabBarPress = () => {
    this.props.onPressed();
  }

  render() {
      let stylesArray = [styles.infoBarFont];
      let stylesRightBorder = this.props.withBorder ? styles.infoBarBorder : {};
      if (this.props.withBorder) {stylesArray.push(styles.infoBarBorder)}
      return (
        <View style={stylesRightBorder}>
          <TouchableOpacity onPress={this._onTabBarPress}>
            <Text style={styles.infoBarFont}>
              {this.props.text}
            </Text>
          </TouchableOpacity>
        </View>
        
      );
  }
}
