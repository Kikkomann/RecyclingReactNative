import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Button } from "react-native-material-ui";

import InfoBar from "../components/InfoBar";
import TenTips from "../components/TenTips";
import GreyZone from "../components/GreyZone";
import Travel from "../components/Travel";

import { setCurrentUser } from "../actions";

import { styles } from "../styles/styles";

class InformationScreen extends React.Component {
    constructor(props) {
        super(props);

        onChange = state => {
            this.setState(state);
        };

        this.state = {
            greyZone: true,
            travel: false,
            tenTips: false
        };

        this.logOut = this.logOut.bind(this);
        this._onGreyZonePressed = this._onGreyZonePressed.bind(this);
        this._onTravelPressed = this._onTravelPressed.bind(this);
        this._onTenTipsPressed = this._onTenTipsPressed.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Info",
            headerRight: (
                <Button
                    onPress={navigation.getParam("logOut")}
                    text="Skift bruger"
                />
            )
        };
    };

    componentDidMount() {
        this.props.navigation.setParams({ logOut: this.logOut });
    }

    logOut() {
        this.props.setCurrentUser(null);
        this.props.navigation.navigate("AuthLoading");
    }

    _onGreyZonePressed() {
        this.setState(() => {
            return {
                greyZone: true,
                travel: false,
                tenTips: false
            };
        });
    }

    _onTravelPressed() {
        this.setState(() => {
            return {
                greyZone: false,
                travel: true,
                tenTips: false
            };
        });
    }

    _onTenTipsPressed() {
        this.setState(() => {
            return {
                greyZone: false,
                travel: false,
                tenTips: true
            };
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <InfoBar
                    navigation={this.props.navigation}
                    onGreyZonePressed={this._onGreyZonePressed}
                    onTravelPressed={this._onTravelPressed.bind(this)}
                    onTenTipsPressed={this._onTenTipsPressed.bind(this)}
                />
                {this.state.greyZone ? <GreyZone /> : undefined}
                {this.state.travel ? <Travel /> : undefined}
                {this.state.tenTips ? <TenTips /> : undefined}
            </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    setCurrentUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InformationScreen);
