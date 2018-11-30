import React from "react";
import { View, ScrollView } from "react-native";
import { connect } from "react-redux";

import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";

import { appStart, createUser, setCurrentUser } from "../actions";

import { styles } from "../styles/styles";
import { fetchingUsers, allHubs, allUsers, currentUser } from "../selectors";

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: true
        };

        this.onAddUser = this.onAddUser.bind(this);
        this.onChooseUser = this.onChooseUser.bind(this);
    }

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        this.props.appStart();
    }

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
        console.log(this.props.fetchingUsers);
        return (
            <View style={styles.container}>
                {/* <ScrollView style={{borderWidth: 3}}> */}
                <View style={styles.loginScreen}>
                    {this.state.login ? (
                        <LoginComponent
                            allUsers={users}
                            onValueChange={this.onChooseUser}
                            navigate={() => this.setState({ login: false })}
                            stillFetching={this.props.fetchingUsers}
                        />
                    ) : (
                        <RegisterComponent
                            allHubs={hubs}
                            addUser={this.onAddUser}
                            navigate={() => this.setState({ login: true })}
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
