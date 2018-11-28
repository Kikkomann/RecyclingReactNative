import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { Button } from "react-native-material-ui";
import moment from "moment";

import { appStart, setCurrentUser, getAllFractionsByUserId } from "../actions";

import { currentUser, allFractions } from "../selectors";

import {
    VictoryChart,
    VictoryGroup,
    VictoryBar,
    VictoryLegend,
    VictoryAxis
} from "victory-native";

import { styles } from "../styles/styles";
import BarChart from "../components/BarChart";

class HomeScreen extends Component {
    constructor(props) {
        super(props);
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
        this.props.appStart();
        let crUser = {
            id: "-LSBfkUwm9tPz_-DH91f",
            firstName: "Rune Hou",
            lastName: "Thode",
            hubId: "1234567"
        };
        this.props.setCurrentUser(crUser);
        this.props.getFractionsByUser(this.props.currentUser);
        this.props.navigation.setParams({ logOut: this.logOut });
    }

    logOut() {
        this.props.setCurrentUser(null);
        this.props.navigation.navigate("Auth");
    }

    render() {
        return (
            <View style={styles.container}>
                <BarChart fractions={this.props.fractions} />
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
