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
        marginBottom: hp("1.7%"),
        color: Colors.naestvedBlueLight,
        textShadowColor: Colors.naestvedBlueDark,
    },

    loginScreen: {
        flex: 1,
        width: wp("70%"),
        height: hp("50%"),
        justifyContent: "center",
        alignSelf: "center"
    },

    loginScreenLandscape: {
        flex: 1,
        width: wp("60%"),
        height: hp("75%"),
        justifyContent: "center",
        alignSelf: "center"
    },

    loginPicker: {
        height: hp("8.3%"),
        borderWidth: 1,
        borderColor: Colors.greenDarkTheme,
        marginTop: hp("1.7%"),
        marginBottom: hp("1.7%"),
        alignItems: "flex-end"
    },

    loginPickerLandscape: {
        height: hp("8.3%"),
        borderWidth: 1,
        borderColor: Colors.greenDarkTheme,
        marginTop: hp("1.7%"),
        marginBottom: hp("1.7%"),
        alignItems: "flex-end"
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
    },

    changeChartButton: {
        alignSelf: "center",
        flex: 1,
    },

    changeChartButtonLandscape: {
        alignSelf: "center",
        flex: 2,
        marginRight: 5,
        marginLeft: 5,
    },

    homeScreenWrapper: {
        flex: 5,
    },

    homeScreenWrapperLandscape: {
        flex: 9,
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
        alignSelf: "center",
    },
    underline: { borderTopWidth: 0 }
};

export const RNpickerStyleLandscape = {
    inputIOS: {
        color: "white",
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12
    },
    inputAndroid: {
        width: wp("53%"),
        alignSelf: "center"
    },
    underline: { borderTopWidth: 0 }
};

export const charts = {
    axisLabel: {
        padding: wp("8%")
    },

    wrapper: {
        width: wp("93%"),
        height: hp("60%"),
        borderWidth: 1,
        borderColor: Colors.backgroundWhiteTheme,
    },

    wrapperLandscape: {
        flexDirection: "row-reverse",
        borderWidth: 1,
        borderColor: Colors.backgroundWhiteTheme,
    },

    chartHeader: {
        fontSize: hp("3%"),
        fontWeight: "bold",
        alignSelf: "center",
        color: Colors.naestvedBlueLight,
        top: hp("3%"),
    },

    chart: {
        flex: 9,
    },

    chartLandscape: {
        flex: 2,
    },

    legend: {
        flex: 1,
    },

    legendLandscape: {
        height: wp("50%"),
        alignSelf: "center",
        flex: 1,
    },

    labels: { fontSize: hp("2%") }
};

export const ActivityIndicatorSize = hp("10%");

export const tabBarIconSize = hp("4.6%");
