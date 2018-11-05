import React from 'react';
import {
  View,
} from 'react-native';

import InfoBarText from './InfoBarText';

import Styles from '../styles/styles';
import strings from '../constants/strings';

export default class InfoBar extends React.Component {
  constructor(props) {
      super(props);
  }

  _onGreyZonePressed = () => {
    this.props.onPressed();
  }

  render() {
    return (
      <View flexDirection='row' style={Styles.infoBar}>
      	  <InfoBarText text={strings.infoBar.option1} withBorder={true} onPressed={this.props.onGreyZonePressed}/>
      	  <InfoBarText text={strings.infoBar.option2} withBorder={true} onPressed={this.props.onTravelPressed}/>
      	  <InfoBarText text={strings.infoBar.option3} onPressed={this.props.onTenTipsPressed}/>
      </View>
    );
  }
}