import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import Colors from "../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: Colors.backgroundWhiteTheme
    },

    infoBar: {
        paddingTop: wp("2.5%")
    },

    infoBarFont: {
        color: Colors.naestvedBlueDark,
        fontWeight: "bold",
        fontSize: hp("3%"),
        padding: wp("2.5%")
    },
    infoBarBorder: {
        borderRightWidth: 2,
        borderRightColor: Colors.naestvedBlueDark
    },

    registerLink: {
        color: "blue",
        textDecorationLine: "underline",
        alignSelf: "center",
        margin: hp("0.75%")
    },

    loginHeaderText: {
        fontSize: hp("3%"),
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginBottom: hp("1%")
    },

    loginScreen: {
        flex: 1,
        width: wp("70%"),
        height: hp("50%"),
        justifyContent: "center",
        alignSelf: "center"
    },
    addTrashInput: {
        height: hp("10%"),
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
});

// Fra: https://github.com/lawnstarter/react-native-picker-select/issues/29
export const RNpickerStyle = {
    inputIOS: {
        color: "white",
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12
    },
    inputAndroid: {
        width: wp("70%"),
        alignSelf: "center"
    },
    underline: { borderTopWidth: 0 }
};

export const barChart = {
    axisLabel: {
        padding: wp("8%")
    },

    barChart: {
        width: wp("93%")
    },

    chart: {
    },

    legend: {
    },
}