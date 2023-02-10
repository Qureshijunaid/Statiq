import {
    StyleSheet,
    Platform
} from 'react-native';

import constants from '../../constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    subContainer:{
        width:"90%",     
    },
    text18600: {
        fontSize: 18,
        fontWeight: "600",

    },
    inputContainer: {
        marginTop:constants.vh(30),
     
       
    },
    buttonContainer: {
        width: "50%",
        alignSelf: "center",
        marginTop:constants.vh(30),
    }
})