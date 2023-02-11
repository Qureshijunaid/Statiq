import {
    StyleSheet,
    Platform
} from 'react-native';

import constants from '../../constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
       
    },
    signupContainerBack: {
        flexDirection: "row",
        alignItems: "center", 
        marginStart: constants.vw(15)
    },
    subContainer: {
        width: "90%",
       alignSelf:"center"
    },
    text18600: {
        fontSize: 18,
        fontWeight: "600",

    },
    inputContainer: {
        marginTop: constants.vh(30),
        alignSelf: "center"


    },
    buttonContainer: {
        width: "50%",
        alignSelf: "center",
        marginTop: constants.vh(30),
    }
})