import React from "react";
import { View, Picker } from "react-native";
import { connect } from "react-redux";
import { TextField } from "react-native-material-textfield";
import { Checkbox, Button } from "react-native-material-ui";
import createUser from "../actions/user/create";

import Styles from "../styles/styles";

class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            hubId: ""
        };

        this.onAddTrash = this.onAddTrash.bind(this);
    }

    onAddUser() {
        let { firstName, lastName, hubId } = this.state;
        debugger;
        this.props.createUser(firstName, lastName, hubId);
    }

    render() {
        let { firstName, lastName, hubId } = this.state;
        return (
            <View style={Styles.container}>
                <View>
                    <TextField
                        label="Fornavn"
                        value={firstName}
                        onChangeText={firstName => this.setState({ firstName })}
                    />
                    <TextField
                        label="Efternavn"
                        value={lastName}
                        onChangeText={lastName => this.setState({ lastName })}
                    />
                </View>
                <View>
                    <Button onPress={this.onAddUser} text="Tilføj" />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    hubs: state.users
});

const mapDispatchToProps = {
    createUser: createUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterScreen);
