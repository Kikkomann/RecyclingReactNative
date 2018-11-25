import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import { getAllHubs } from "../actions/hub/getAll";

import styles from "../styles/styles";
import strings from "../constants/strings";

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.onCodeEntered = this.onCodeEntered.bind(this);
    }

    onCodeEntered(value) {
        
    }

    componentDidMount() {
        this.props.fetchHubs();
    }

    render() {
        let { allHubs } = this.props.hubs;
        let hubsFound = !!allHubs.length;
        let hubNames = hubsFound
            ? allHubs.map(hubItem => ({
                  label: hubItem.name,
                  value: hubItem
              }))
            : [{ label: "Loading hubs...", value: "loading" }];
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
    fetchHubs: getAllHubs
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);
