import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { Button } from "react-native-material-ui";

import { appStart, setCurrentUser, getAllFractionsByUserId } from "../actions";

import { currentUser, allFractions, fetchingFractions } from "../selectors";

import { styles } from "../styles/styles";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showBar: false,
            reRender: 1
        };
        //Todo: delete
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
        this.props.getFractionsByUser(this.props.currentUser);
        this.props.navigation.addListener("didFocus", this._handleDataChange);
        this.props.navigation.setParams({ logOut: this.logOut });
    }

    _handleDataChange = () => {
        this.props.getFractionsByUser(this.props.currentUser);
    };

    logOut() {
        this.props.setCurrentUser(null);
        this.props.navigation.navigate("Auth");
    }

    render() {
        console.log("Show barChart?: " + this.state.showBar);
        return (
            <View style={styles.container}>
                {this.state.showBar ? (
                    <BarChart fractions={this.props.fractions} navigation={this.props.navigation} stillFetching={this.props.fetchingFractions} />
                ) : (
                    <LineChart fractions={this.props.fractions} stillFetching={this.props.fetchingFractions} />
                )}
                <View style={{ borderWidth: 1 }}>
                    <Button
                        onPress={() =>
                            this.setState({ showBar: !this.state.showBar })
                        }
                        text="Skift diagram"
                    />
                </View>
            </View>
        );
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
