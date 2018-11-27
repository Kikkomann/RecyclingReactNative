import React from "react";
import { View, ScrollView } from "react-native";
import { connect } from "react-redux";

import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";

import { appStart } from "../actions/app/appStart";
import { create } from "../actions/user/create";
import { setCurrentUser } from "../actions/app/currentUser";

import { styles } from "../styles/styles";

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
        let { allUsers } = this.props.users;
        let { allHubs } = this.props.hubs;
        return (
            <View style={styles.container}>
            {/* <ScrollView style={{borderWidth: 3}}> */}
                <View style={styles.loginScreen}>
                    {this.state.login ? (
                        <LoginComponent
                            allUsers={allUsers}
                            onValueChange={this.onChooseUser}
                            navigate={() => this.setState({ login: false })}
                        />
                    ) : (
                        <RegisterComponent
                            allHubs={allHubs}
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
    users: state.users,
    hubs: state.hubs,
    currentUser: state.currentUser
});

const mapDispatchToProps = {
    appStart,
    setCurrentUser,
    createUser: create
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen);
