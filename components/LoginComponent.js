import React from "react";
import { Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import { styles, RNpickerStyle } from "../styles/styles";
import strings from "../constants/strings";

export default class LoginComponent extends React.Component {
    render() {
        let { allUsers } = this.props;
        let usersFound = !!allUsers.length;
        let userNames = usersFound
            ? allUsers.map(userItem => ({
                  label: userItem.firstName,
                  value: userItem
              }))
            : [];
        return (
            <View>
                <Text style={styles.loginHeaderText}> Vælg bruger </Text>
                <RNPickerSelect
                    placeholder={{
                        label: strings.loginScreen.selectUser,
                        value: this.props.currentUser
                    }}
                    items={userNames}
                    style={RNpickerStyle}
                    enabled={!!usersFound}
                    onValueChange={this.props.onValueChange}
                />
                <View>
                    <Text
                        style={styles.registerLink}
                        onPress={this.props.navigate}>
                        Er du ikke på listen? Så klik her.
                    </Text>
                </View>
            </View>
        );
    }
}
