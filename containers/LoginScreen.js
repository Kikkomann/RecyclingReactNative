import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { Button } from "react-native-material-ui";
import RNPickerSelect from "react-native-picker-select";

import { getAllUsers } from "../actions/user/getAll";

import Styles from "../styles/styles";
import strings from "../constants/strings";

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.onChooseUser = this.onChooseUser.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers();2
    }

    onChooseUser() {
        this.props.navigation.navigate("App");
    }

    render() {
		// let { users } = this.props.users;
		// let usersFound = !!users.length;
        // let userNames = usersFound
        //     ? users.map(userItem => ({
        //           label: userItem.name,
        //           value: userItem.name
        //       }))
        //     : [{ label: "Loading users...", value: "loading" }];
        return (
            <View style={Styles.container}>
                <Text> Vælg bruger </Text>
				{/* <RNPickerSelect
                    placeholder={{
                        label: strings.loginScreen.selectUser,
                        value: null
                    }}
                    items={userNames}
                    style={Styles.picker}
                    enabled={!!usersFound}
                    onValueChange={this.onCodeEntered}
                /> */}
                <Button onPress={this.onChooseUser} text="Vælg" />
                <View>
                <Text
                    style={Styles.registerLink}
                    onPress={() => this.props.navigation.navigate("Register")}
                >
                    Er du ikke på listen? Så klik her.
                </Text>
            </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    hubs: state.users
});

const mapDispatchToProps = {
    fetchUsers: getAllUsers
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen);