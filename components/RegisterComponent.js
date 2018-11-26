import React from "react";
import { View, Text } from "react-native";
import { TextField } from "react-native-material-textfield";
import RNPickerSelect from "react-native-picker-select";
import { Button } from "react-native-material-ui";

import { styles, RNpickerStyle } from "../styles/styles";

export default class RegisterComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            hubId: ""
        };
        this.addUser = this.addUser.bind(this);
    }

    addUser() {
        let { firstName, lastName, hubId } = this.state;
        this.props.addUser(firstName, lastName, hubId);
    }

    render() {
        let { firstName, lastName, hubId } = this.state;
        let { allHubs } = this.props;
        let hubsFound = !!allHubs.length;
        let hubNames = hubsFound
            ? allHubs.map(hubItem => ({
                  label: hubItem.name,
                  value: hubItem
              }))
            : [];
        return (
            <View style={[styles.container, { justifyContent: "center" }]}>
                <Text style={styles.loginHeaderText}> Opret ny bruger </Text>
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
                        style={RNpickerStyle}
                        enabled={!!hubsFound}
                        onValueChange={hub => this.setState({ hubId: hub.id })}
                    />
                    <Button onPress={this.addUser} text="Tilføj" />
                </View>

                <View>
                    <Text
                        style={styles.registerLink}
                        onPress={this.props.navigate}>
                        Tilbage til valg af bruger? Klik her.
                    </Text>
                </View>
            </View>
        );
    }
}
