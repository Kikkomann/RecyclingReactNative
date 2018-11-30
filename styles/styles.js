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

    tabBarFontSize: {
        fontSize: hp("2%")
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
        marginTop: hp("3%")
    },

    loginHeaderText: {
        fontSize: hp("3%"),
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginBottom: hp("1.7%")
    },

    loginScreen: {
        flex: 1,
        width: wp("70%"),
        height: hp("50%"),
        justifyContent: "center",
        alignSelf: "center"
    },

    loginPicker: {
        height: hp("8.5%"),
        borderWidth: 1,
        marginTop: hp("1.7%"),
        marginBottom: hp("1.7%")
    },

    addTrashInput: {
        height: hp("10%"),
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap"
    },

    ActivityIndicator: {
        flex: 1,
        flexDirection: "row"
    },

    addButton: {
        marginTop: hp("1.7%")
    }
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
        width: wp("93%"),
        height: hp("50%")
    },

    chart: {},

    legend: {
        fontSize: hp("1%")
    },
    labels: { fontSize: hp("2%") }
};

export const ActivityIndicatorSize = hp("10%");

export const tabBarIconSize = hp("4.6%");
