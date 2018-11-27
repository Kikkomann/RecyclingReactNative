import React from "react";
import { View, ScrollView } from "react-native";
import { TextField } from "react-native-material-textfield";
import { Button } from "react-native-material-ui";
import { connect } from "react-redux";
import CheckBox from "react-native-check-box";
import RNPickerSelect from "react-native-picker-select";
import DatePicker from "react-native-datepicker";

import { setCurrentUser } from "../actions/app/currentUser";
import { create } from "../actions/fraction/create";

import { styles, RNpickerStyle } from "../styles/styles";

class AddFractionScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weight: "",
            isClean: false,
            trashType: "",
            date: new Date()
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
        let { weight, isClean, trashType, date } = this.state;
        this.props.addFraction(
            weight,
            isClean,
            trashType,
            this.props.currentUser.id,
            date,
        );
    }

    render() {
        let trashTypes = [
            { label: "Restaffald", value: "rest" },
            { label: "Glas/metal/plast", value: "gmp" },
            { label: "Pap/papir", value: "pp" },
            { label: "Bioaffald", value: "bio" }
        ];
        let { weight } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.addTrashInput}>
                        <View style={{ flex: 4 }}>
                            <TextField
                                label="Vægt i kg."
                                value={weight}
                                keyboardType="numeric"
                                onChangeText={weight =>
                                    this.setState({ weight })
                                }
                            />
                        </View>
                        <View style={{ flex: 2 }}>
                            <CheckBox
                                label="I Agree"
                                value="agree"
                                rightText={"Sorteret korrekt"}
                                onClick={() =>
                                    this.setState({
                                        isClean: !this.state.isClean
                                    })
                                }
                                isChecked={this.state.isClean}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            alignSelf: "flex-start",
                            flexDirection: "column",
                            height: 150
                        }}>
                        <View>
                            <RNPickerSelect
                                placeholder={{
                                    label: "Vælg affaldstype",
                                    value: null
                                }}
                                items={trashTypes}
                                style={RNpickerStyle}
                                value={this.state.trashType}
                                onValueChange={trashType => {
                                    this.setState({ trashType });
                                }}
                            />
                        </View>
                        <View>
                            <DatePicker
                                style={{ width: 200 }}
                                date={this.state.date}
                                mode="date"
                                placeholder="select date"
                                format="DD-MM-YYYY"
                                minDate="01-01-2000"
                                maxDate="31-12-2020"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: "absolute",
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36
                                    }
                                }}
                                onDateChange={date => {
                                    this.setState({ date: date });
                                }}
                            />
                        </View>
                        <View style={{ borderWidth: 1 }}>
                            <Button onPress={this.onAddTrash} text="Tilføj" />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.appState.currentUser
});

const mapDispatchToProps = {
    setCurrentUser,
    addFraction: create
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddFractionScreen);
