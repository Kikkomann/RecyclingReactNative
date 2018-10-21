import React from 'react';
import {
  View,
} from 'react-native';

import InfoBarText from './InfoBarText';

import Styles from '../styles/styles';
import strings from '../constants/strings';

export default class InfoBar extends React.Component {
  render() {
    return (
      <View flexDirection='row'>
      	  <InfoBarText text={strings.infoBar.option1} withBorder={true}/>
      	  <InfoBarText text={strings.infoBar.option2} withBorder={true}/>
      	  <InfoBarText text={strings.infoBar.option3} />
      </View>
    );
  }

}