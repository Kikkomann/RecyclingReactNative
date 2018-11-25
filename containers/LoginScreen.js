import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import RNPickerSelect from "react-native-picker-select";

import { appStart } from "../actions/app/appStart";
import { setCurrentUser } from "../actions/app/currentUser";

import Styles from "../styles/styles";
import strings from "../constants/strings";

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.onChooseUser = this.onChooseUser.bind(this);
    }

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        this.props.appStart();
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
        let usersFound = !!allUsers.length;
        let userNames = usersFound
            ? allUsers.map(userItem => ({
                  label: userItem.firstName,
                  value: userItem
              }))
            : [];
        return (
            <View style={[Styles.container, { justifyContent: "center" }]}>
                <Text style={Styles.loginHeaderText}> Vælg bruger </Text>
                <RNPickerSelect
                    placeholder={{
                        label: strings.loginScreen.selectUser,
                        value: this.props.currentUser
                    }}
                    items={userNames}
                    style={Styles.picker}
                    enabled={!!usersFound}
                    onValueChange={this.onChooseUser}
                />
                <View>
                    <Text
                        style={Styles.registerLink}
                        onPress={() =>
                            this.props.navigation.navigate("Register")
                        }>
                        Er du ikke på listen? Så klik her.
                    </Text>
                </View>
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
    setCurrentUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen);
