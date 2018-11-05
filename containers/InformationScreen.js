import React from 'react';
import {
  View,
} from 'react-native';
import InfoBar from '../components/InfoBar';
import TenTips from '../components/TenTips';
import GreyZone from '../components/GreyZone';
import Travel from '../components/Travel';

import Styles from '../styles/styles';

export default class InformationScreen extends React.Component {
  constructor(props) {
    super(props);

     onChange = (state) => {
        this.setState(state);
      }

    this.state = {
      greyZone: true,
      travel: false,
      tenTips: false
    }

    this._onGreyZonePressed = this._onGreyZonePressed.bind(this);
    this._onTravelPressed = this._onTravelPressed.bind(this);
    this._onTenTipsPressed = this._onTenTipsPressed.bind(this);
  }

  _onGreyZonePressed () {
    this.setState( () => {
      return {
        greyZone: true,
        travel: false,
        tenTips: false
      }      
    });
  }

  _onTravelPressed() {
    this.setState(() => {
      return {
        greyZone: false,
        travel: true,
        tenTips: false
      }      
    });
  }

  _onTenTipsPressed() {
    this.setState(() => {
      return {
        greyZone: false,
        travel: false,
        tenTips: true
      }      
    });
  }

  render() {
    return (
      <View style={Styles.container}>
        <InfoBar navigation={this.props.navigation} onGreyZonePressed={this._onGreyZonePressed} onTravelPressed={this._onTravelPressed.bind(this)} onTenTipsPressed={this._onTenTipsPressed.bind(this)}/>
        {this.state.greyZone ? <GreyZone/> : undefined}
        {this.state.travel ? <Travel/> : undefined}
        {this.state.tenTips ? <TenTips/> : undefined}
      </View>
    );
  }
}