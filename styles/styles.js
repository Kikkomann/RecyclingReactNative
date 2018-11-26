import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    //     borderRadius: 4,
    // borderWidth: 0.5,
    // borderColor: '#d6d7da',
    },

    infoBar: {
        paddingTop: wp("2.5%")
    },

    infoBarFont: {
        color: "#003452" /*naestvedBlueDark*/,
        fontWeight: "bold",
        fontSize: hp("3%"),
        padding: wp("2.5%")
    },
    infoBarBorder: {
        borderRightWidth: 2,
        borderRightColor: "#003452" /*naestvedBlueDark*/
    },

    registerLink: {
        color: "blue",
        textDecorationLine: "underline"
    },

    loginHeaderText: {
        fontSize: hp("3%"),
        fontWeight: "bold",
        margin: wp("2.4%"),
        alignSelf: "flex-start"
    },

    loginScreen: {
        width: wp("70%"),
        height: hp("50%"),
        justifyContent: "center"
    }
});

export const RNpickerStyle = {
    inputIOS: {
        color: 'white',
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
    },
    inputAndroid: {
        color: 'white',
        width: wp("80%"),
        alignSelf: "center"
    },
    placeholderColor: 'white',
    underline: { borderTopWidth: 0 },
    icon: {
        position: 'absolute',
        backgroundColor: 'transparent',
        borderTopWidth: 5,
        borderTopColor: '#00000099',
        borderRightWidth: 5,
        borderRightColor: 'transparent',
        borderLeftWidth: 5,
        borderLeftColor: 'transparent',
        width: 100,
        height: 0,
        top: 20,
        right: 15,
    },
}