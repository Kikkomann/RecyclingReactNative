import React from "react";
import { Text, View, ActivityIndicator } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import { styles, RNpickerStyle } from "../styles/styles";
import strings from "../constants/strings";
import Colors from "../constants/Colors";

export default class LoginComponent extends React.Component {
    render() {
        let { allUsers, stillFetching } = this.props;
        let userNames = allUsers.map(userItem => ({
            label: userItem.firstName,
            value: userItem
        }));
        return (
            <View>
                <Text style={styles.loginHeaderText}> Vælg bruger </Text>
                <View style={styles.loginPicker}>
                    {stillFetching ? (
                        <ActivityIndicator
                            style={styles.ActivityIndicator}
                            color={Colors.ActivityIndicatorColor}
                        />
                    ) : (
                        <RNPickerSelect
                            placeholder={{
                                label: strings.loginScreen.selectUser,
                                value: this.props.currentUser
                            }}
                            items={userNames}
                            style={RNpickerStyle}
                            onValueChange={this.props.onValueChange}
                        />
                    )}
                </View>
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
