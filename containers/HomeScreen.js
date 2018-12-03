import React, { Component } from "react";
import { connect } from "react-redux";
import Orientation from "react-native-orientation";

import { View, ActivityIndicator, Button } from "react-native";
import { Button as UIButton } from "react-native-material-ui";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";

import { appStart, setCurrentUser, getAllFractionsByUserId } from "../actions";

import { currentUser, allFractions, fetchingFractions } from "../selectors";

import { styles, ActivityIndicatorSize } from "../styles/styles";
import Colors from "../constants/Colors";

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showBar: true,
            orientation: ""
        };

        this.logOut = this.logOut.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        // if (this.state && this.state.orientation == "LANDSCAPE") {
        //     return {
        //         header: {
        //             style: {
        //                 position: "absolute",
        //                 backgroundColor: "transparent",
        //                 zIndex: 100,
        //                 top: 0,
        //                 left: 0,
        //                 right: 0
        //             }
        //         }
        //     };
        // } else if (this.state && this.state.orientation == "PORTRAIT") {
        return {
            headerTitle: navigation.getParam("hideHeader") ? "" : "Hjem",
            headerTransparent: navigation.getParam("hideHeader"),
            headerRight: (
                <UIButton
                    onPress={navigation.getParam("logOut")}
                    text="Skift bruger"
                />
            )
        };
        // } else {
        //     return null;
        // }
    };

    componentDidMount() {
        Orientation.addOrientationListener(this._orientationDidChange);
        this.props.getFractionsByUser(this.props.currentUser);
        this.props.navigation.addListener("didFocus", this._handleDataChange);
        this.props.navigation.setParams({ logOut: this.logOut });
    }

    componentWillUnmount() {
        // Remember to remove listener
        Orientation.removeOrientationListener(this._orientationDidChange);
    }

    _orientationDidChange = orientation => {
        this.props.navigation.setParams({hideHeader: orientation != "PORTRAIT"});
        this.setState({ orientation: orientation });
    };

    _handleDataChange = () => {
        this.props.getFractionsByUser(this.props.currentUser);
    };

    logOut() {
        this.props.setCurrentUser(null);
        this.props.navigation.navigate("Auth");
    }

    render() {
        let { orientation } = this.state;
        if (this.props.fetchingFractions) {
            return (
                <View style={styles.container}>
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
                    <View
                        style={
                            orientation == "LANDSCAPE"
                                ? styles.homeScreenWrapperLandscape
                                : styles.homeScreenWrapper
                        }>
                        {this.state.showBar ? (
                            <BarChart
                                fractions={this.props.fractions}
                                navigation={this.props.navigation}
                                stillFetching={!this.props.fetchingFractions}
                                orientation={orientation}
                            />
                        ) : (
                            <LineChart
                                fractions={this.props.fractions}
                                stillFetching={this.props.fetchingFractions}
                                orientation={orientation}
                            />
                        )}
                    </View>
                    <View style={orientation == "LANDSCAPE" ? styles.changeChartButtonLandscape : styles.changeChartButton}>
                        <Button
                            onPress={() =>
                                this.setState({
                                    showBar: !this.state.showBar
                                })
                            }
                            title={
                                "Vis " +
                                (this.state.showBar ? "sorterings" : "total") +
                                "graf"
                            }
                            color={Colors.greenLightTheme}
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
    fetchingFractions: fetchingFractions(state),
    currentUser: currentUser(state),
    fractions: allFractions(state)
});

const mapDispatchToProps = {
    appStart,
    setCurrentUser,
    getFractionsByUser: getAllFractionsByUserId
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);
