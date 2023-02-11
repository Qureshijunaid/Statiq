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
    text16600: {
        fontSize: constants.vw(16),
        fontWeight: "600",
        marginTop: constants.vh(30),
        color: "skyblue"
    },
    image: { height: constants.vh(80), width: constants.vw(100) }
})