import React from "react";
import { View, Picker, Text } from "react-native";
import { connect } from "react-redux";
import { TextField } from "react-native-material-textfield";
import RNPickerSelect from "react-native-picker-select";
import { Button } from "react-native-material-ui";
import { create } from "../actions/user/create";

import Styles from "../styles/styles";

class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            hubId: ""
        };

        this.onAddUser = this.onAddUser.bind(this);
    }

    static navigationOptions = {
        header: null
    };

    onAddUser() {
        let { firstName, lastName, hubId } = this.state;
        this.props.createUser(firstName, lastName, hubId);
    }

    render() {
        let { firstName, lastName, hubId } = this.state;
        let { allHubs } = this.props.hubs;
        let hubsFound = !!allHubs.length;
        let hubNames = hubsFound
            ? allHubs.map(hubItem => ({
                  label: hubItem.name,
                  value: hubItem
              }))
            : [{ label: "Loading hubs...", value: "loading" }];
        return (
            <View style={[Styles.container, { justifyContent: "center" }]}>
                <Text style={Styles.loginHeaderText}> Opret ny bruger </Text>
                <View>
                    <TextField
                        style={{ width: 10 }}
                        label="Fornavn"
                        value={firstName}
                        onChangeText={firstName => this.setState({ firstName })}
                    />
                    <TextField
                        label="Efternavn"
                        value={lastName}
                        onChangeText={lastName => this.setState({ lastName })}
                    />
                    <RNPickerSelect
                        placeholder={{
                            label: "Vælg tilhørende hub",
                            value: "hub"
                        }}
                        items={hubNames}
                        style={Styles.picker}
                        enabled={!!hubsFound}
                        onValueChange={hub => this.setState({ hubId: hub.id })}
                    />
                    <Button onPress={this.onAddUser} text="Tilføj" />
                </View>

                <View>
                    <Text
                        style={Styles.registerLink}
                        onPress={() =>
                            this.props.navigation.navigate("SignIn")
                        }>
                        Tilbage til valg af bruger? Klik her.
                    </Text>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    hubs: state.hubs
});

const mapDispatchToProps = {
    createUser: create
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterScreen);
