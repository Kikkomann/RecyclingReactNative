import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Button } from "react-native-material-ui";

import { setCurrentUser } from "../actions/app/currentUser";

import styles from "../styles/styles";
import strings from "../constants/strings";

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        //Todo: delete
        this.onCodeEntered = this.onCodeEntered.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Hjem",
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

    //TODO Delete
    onCodeEntered(value) {}

    render() {
        let { allHubs } = this.props.hubs;
        let hubsFound = !!allHubs.length;
        let hubNames = hubsFound
            ? allHubs.map(hubItem => ({
                  label: hubItem.name,
                  value: hubItem
              }))
            : [];
        return (
            <View style={styles.container}>
                <RNPickerSelect
                    placeholder={{
                        label: strings.homeScreen.selectHub,
                        value: strings.homeScreen.selectHub
                    }}
                    items={hubNames}
                    style={styles.picker}
                    enabled={!!hubsFound}
                    onValueChange={this.onCodeEntered}
                />
            </View>
        );
    }
}

// HomeScreen.propTypes = {
//    decreaseCount: PropTypes.func.isRequired,
//    increaseCount: PropTypes.func.isRequired,
//    value: PropTypes.number.isRequired,
//  };

const mapStateToProps = state => ({
    hubs: state.hubs
});

const mapDispatchToProps = {
    setCurrentUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);
