import {
    StyleSheet,
    Platform
} from 'react-native';

import constants from '../../constants';

export const styles = StyleSheet.create({
    container: {
         flex: 0.8,
        alignItems: "center",
        justifyContent: "center"
    },
    subContainer:{
        width:"90%",
        alignItems:"center"
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
    },
    image: {
        height: constants.vh(150),
        width: constants.vw(150),
    },
    headerContainer:{
        width:"50%",
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center"
    }
})