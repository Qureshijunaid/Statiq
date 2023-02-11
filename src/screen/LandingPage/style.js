import {
    StyleSheet,
    Platform
} from 'react-native';

import constants from '../../constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    deleteContainer:{
        width: "30%",
        paddingVertical: constants.vw(10), borderWidth: 2,
        alignItems:"center",
        marginTop:constants.vh(20)
    },
    text16600:{
        fontSize:constants.vw(16),
        fontWeight:"600"
    }
})