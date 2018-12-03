import React from "react";
import { View, Text, ToastAndroid, Button } from "react-native";
import { TextField } from "react-native-material-textfield";
import RNPickerSelect from "react-native-picker-select";

import { styles, RNpickerStyle, RNpickerStyleLandscape } from "../styles/styles";
import Colors from "../constants/Colors";

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
        if (firstName && lastName && hubId) {
            this.props.addUser(firstName, lastName, hubId);
        } else {
            ToastAndroid.showWithGravity(
                "Alle felter skal udfyldes!",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }
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
            <View style={{ alignItems: "center" }}>
                <Text style={styles.loginHeaderText}> Opret ny bruger </Text>
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
                    <View style={this.props.orientation == "LANDSCAPE" ? styles.loginPickerLandscape : styles.loginPicker}>
                        <RNPickerSelect
                            placeholder={{
                                label: "Vælg tilhørende hub",
                                value: "hub"
                            }}
                            items={hubNames}
                            style={this.props.orientation == "LANDSCAPE" ? RNpickerStyleLandscape : RNpickerStyle}
                            enabled={!!hubsFound}
                            onValueChange={hub =>
                                this.setState({ hubId: hub.id })
                            }
                        />
                    </View>
                    <Button
                        onPress={this.addUser}
                        title="Tilføj"
                        color={Colors.greenLightTheme}
                    />
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
