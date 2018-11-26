import React from 'react';
import {
  View,
} from 'react-native';

import InfoBarText from './InfoBarText';

import { styles } from '../styles/styles';
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
        <View flexDirection='row' style={styles.infoBar}>
          <InfoBarText text={strings.infoBar.greyZone} withBorder={true} onPressed={this.props.onGreyZonePressed}/>
          <InfoBarText text={strings.infoBar.trashTravel} withBorder={true} onPressed={this.props.onTravelPressed}/>
          <InfoBarText text={strings.infoBar.tenTips} onPressed={this.props.onTenTipsPressed}/>
        </View>
      
      
    );
  }
}