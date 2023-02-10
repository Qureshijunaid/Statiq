import {
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';
import constants from '../../constants'
export const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        paddingVertical: constants.vh(10),
        paddingHorizontal: constants.vw(10),
        width: "100%",
        borderRadius: 8,
        borderWidth:2,
        height:constants.vh(40),
        // backgroundColor: constants.Colors.color_333333,
        fontSize: 16,
        // fontFamily: constants.Fonts.K2D_Regular,
    },
    secureIconContainer: {
        position: "absolute",
        right: constants.vw(18),
    },
})