import React from "react";
import { View, ScrollView, StatusBar } from "react-native";
import { connect } from "react-redux";
import Orientation from "react-native-orientation";

import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";

import { appStart, createUser, setCurrentUser } from "../actions";

import { styles } from "../styles/styles";
import { fetchingUsers, allHubs, allUsers, currentUser } from "../selectors";
import Colors from "../constants/Colors";

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: true,
            orientation: "",
        };

        this.onAddUser = this.onAddUser.bind(this);
        this.onChooseUser = this.onChooseUser.bind(this);
    }

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        Orientation.addOrientationListener(this._orientationDidChange);
        this.props.appStart();
    }

    componentWillUnmount() {
        // Remember to remove listener
        Orientation.removeOrientationListener(this._orientationDidChange);
      }

    _orientationDidChange = orientation => {
        this.setState({ orientation: orientation });
    };

    onAddUser(firstName, lastName, hubId) {
        this.props.createUser(firstName, lastName, hubId);
        this.props.navigation.navigate("App");
    }

    onChooseUser(currentUser) {
        let { setCurrentUser, navigation } = this.props;
        if (currentUser) {
            setCurrentUser(currentUser);
            navigation.navigate("App");
        }
    }

    render() {
        let { users, hubs } = this.props;
        let { orientation } = this.state;
        return (
            <View style={styles.container}>
            <StatusBar barStyle = "light-content" backgroundColor = {Colors.greenDarkTheme}/>
                {/* <ScrollView style={{borderWidth: 3}}> */}
                <View style={orientation == "LANDSCAPE" ? styles.loginScreenLandscape : styles.loginScreen}>
                    {this.state.login ? (
                        <LoginComponent
                            allUsers={users}
                            onValueChange={this.onChooseUser}
                            navigate={() => this.setState({ login: false })}
                            stillFetching={this.props.fetchingUsers}
                            orientation={orientation}
                        />
                    ) : (
                        <RegisterComponent
                            allHubs={hubs}
                            addUser={this.onAddUser}
                            navigate={() => this.setState({ login: true })}
                            orientation={orientation}
                        />
                    )}
                </View>
                {/* </ScrollView> */}
            </View>
        );
    }
}

const mapStateToProps = state => ({
    fetchingUsers: fetchingUsers(state),
    users: allUsers(state),
    hubs: allHubs(state),
    currentUser: currentUser(state)
});

const mapDispatchToProps = {
    appStart,
    setCurrentUser,
    createUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen);
