import React, { Component } from "react";
import { connect } from "react-redux";
import Orientation from "react-native-orientation";

import { View, ActivityIndicator, Button, StatusBar } from "react-native";
import { Button as UIButton } from "react-native-material-ui";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";

import {
    appStart,
    logOut,
    setCurrentUser,
    getAllFractionsByUserId
} from "../actions";

import {
    currentUser,
    firstLoad,
    allFractions,
    fetchingFractions
} from "../selectors";

import { styles, ActivityIndicatorSize } from "../styles/styles";
import Colors from "../constants/Colors";

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showBar: true,
            orientation: ""
        };

        this.focusListener = null;

        this.changeUser = this.changeUser.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: navigation.getParam("hideHeader") ? "" : "Affaldsgrafer",
            headerStyle: {
                backgroundColor: navigation.getParam("hideHeader")
                    ? null
                    : Colors.greenLightLightTheme
            },
            headerTransparent: navigation.getParam("hideHeader"),
            headerRight: (
                <UIButton
                    onPress={navigation.getParam("changeUser")}
                    text="Skift bruger"
                />
            )
        };
    };

    componentDidMount() {
        Orientation.addOrientationListener(this._orientationDidChange);
        this.props.getFractionsByUser(this.props.currentUser);
        this.focusListener = this.props.navigation.addListener(
            "didFocus",
            this._handleDataChange
        );
        this.props.navigation.setParams({ changeUser: this.changeUser });
    }

    componentWillUnmount() {
        // Remember to remove listeners
        this.focusListener.remove();
        Orientation.removeOrientationListener(this._orientationDidChange);
    }

    _orientationDidChange = orientation => {
        this.props.navigation.setParams({
            hideHeader: orientation != "PORTRAIT"
        });
        this.setState({ orientation: orientation });
    };

    _handleDataChange = () => {
        this.props.getFractionsByUser(this.props.currentUser);
    };

    changeUser() {
        this.props.logOut();
        this.props.navigation.navigate("Auth");
    }

    render() {
        let {
            firstLoad,
            fractions,
            navigation,
            fetchingFractions
        } = this.props;
        let { orientation } = this.state;
        if (fetchingFractions && firstLoad) {
            return (
                <View style={styles.container}>
                <StatusBar
                        barStyle="light-content"
                        backgroundColor={Colors.greenDarkTheme}
                    />
                    <ActivityIndicator
                        style={styles.ActivityIndicator}
                        color={Colors.ActivityIndicatorColor}
                        size={ActivityIndicatorSize}
                    />
                </View>
            );
        } else {
            return (
                <View
                    style={[
                        styles.container,
                        orientation == "LANDSCAPE"
                            ? { flexDirection: "row" }
                            : {}
                    ]}>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor={Colors.greenDarkTheme}
                    />
                    <View
                        style={
                            orientation == "LANDSCAPE"
                                ? styles.homeScreenWrapperLandscape
                                : styles.homeScreenWrapper
                        }>
                        {this.state.showBar ? (
                            <BarChart
                                fractions={fractions}
                                navigation={navigation}
                                stillFetching={!fetchingFractions}
                                orientation={orientation}
                            />
                        ) : (
                            <LineChart
                                fractions={fractions}
                                stillFetching={fetchingFractions}
                                orientation={orientation}
                            />
                        )}
                    </View>
                    <View
                        style={
                            orientation == "LANDSCAPE"
                                ? styles.changeChartButtonLandscape
                                : styles.changeChartButton
                        }>
                        <Button
                            onPress={() =>
                                this.setState({
                                    showBar: !this.state.showBar
                                })
                            }
                            title={
                                orientation == "LANDSCAPE"
                                    ? "SKIFT GRAF"
                                    : "Vis " +
                                      (this.state.showBar
                                          ? "sorterings"
                                          : "total") +
                                      "graf"
                            }
                            color={Colors.naestvedBlueLight}
                        />
                    </View>
                </View>
            );
        }
    }
}

// HomeScreen.propTypes = {
//    decreaseCount: PropTypes.func.isRequired,
//    increaseCount: PropTypes.func.isRequired,
//    value: PropTypes.number.isRequired,
//  };

const mapStateToProps = (state, ownProps) => ({
    currentUser: currentUser(state),
    firstLoad: firstLoad(state),
    fetchingFractions: fetchingFractions(state),
    fractions: allFractions(state)
});

const mapDispatchToProps = {
    appStart,
    logOut,
    setCurrentUser,
    getFractionsByUser: getAllFractionsByUserId
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);
