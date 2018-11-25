import React from "react";
import { View, Picker } from "react-native";
import { TextField } from "react-native-material-textfield";
import { Checkbox, Button } from "react-native-material-ui";

import Styles from "../styles/styles";

export default class AddFractionScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weight: "",
            isClean: false,
            trashType: "SizeEnum.REST"
        };

        this.onAddTrash = this.onAddTrash.bind(this);
    }

    onAddTrash() {
        let { weight, isClean, trashType } = this.state;
    }

    render() {
        let { weight } = this.state;
        return (
            <View style={Styles.container}>
                <View style={{ flex: 1, flexDirection: 'row'}}>
                    <TextField 
                        label="Vægt"
                        value={weight}
                        onChangeText={weight => this.setState({ weight })}
                    />
                    <Checkbox
                        label="I Agree"
                        style={{width: 10}}
                        value="agree"
                        onCheck={clean => this.setState({ clean })}
                        checked={this.state.isClean}
                    />
                </View>
                <View>
                    <Button onPress={this.onAddTrash} text="Tilføj" />
                </View>
            </View>
        );
    }
}
