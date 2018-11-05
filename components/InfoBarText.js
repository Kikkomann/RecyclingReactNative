import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Colors from '../constants/Colors';
import Styles from '../styles/styles';

export default class InfoBarText extends React.Component {
  constructor(props) {
    super(props)
  }
  
  _onTabBarPress = () => {
    console.log("CONSOLE:LOG");
    this.props.onPressed();
  }

  render() {
      let stylesArray = [Styles.infoBarFont];
      let stylesRightBorder = this.props.withBorder ? Styles.infoBarBorder : {};
      if (this.props.withBorder) {stylesArray.push(Styles.infoBarBorder)}
      return (
        <View style={stylesRightBorder}>
          <TouchableOpacity onPress={this._onTabBarPress}>
            <Text style={Styles.infoBarFont}>
              {this.props.text}
            </Text>
          </TouchableOpacity>
        </View>
        
      );
  }
}
