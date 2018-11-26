import React from "react";
import { View, Picker } from "react-native";
import { TextField } from "react-native-material-textfield";
import { Checkbox, Button } from "react-native-material-ui";
import { connect } from "react-redux";

import { setCurrentUser } from "../actions/app/currentUser";

import { styles } from "../styles/styles";

class AddFractionScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weight: "",
            isClean: false,
            trashType: "SizeEnum.REST"
        };

        this.logOut = this.logOut.bind(this);
        this.onAddTrash = this.onAddTrash.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Hjem",
            headerRight: (
                <Button
                    onPress={navigation.getParam("logOut")}
                    text="Skift bruger"
                />
            )
        };
    };

    componentDidMount() {
        this.props.navigation.setParams({ logOut: this.logOut });
    }

    logOut() {
        this.props.setCurrentUser(null);
        this.props.navigation.navigate("AuthLoading");
    }

    onAddTrash() {
        let { weight, isClean, trashType } = this.state;
    }

    render() {
        let { weight } = this.state;
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <TextField
                        label="Vægt"
                        value={weight}
                        onChangeText={weight => this.setState({ weight })}
                    />
                    <Checkbox
                        label="I Agree"
                        style={{ width: 10 }}
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

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
    setCurrentUser
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddFractionScreen);