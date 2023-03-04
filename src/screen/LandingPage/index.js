import React, { useState, useEffect } from "react";
import {
    View, Text, SafeAreaView, TouchableOpacity,
    StatusBar,
    ImageBackground
} from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { styles } from "./style";
import constants from "../../constants";
import { switchRoute } from '../../actions/auth';
import {
    wipeStorage, getUser, setDeletedUser,
    wipeStorageAll
} from '../../utils/asyncstorage';
function LandingPage(props) {
    const dispatch = useDispatch()
    const deleteAccount = () => {
        getUser().then(userArray => {

            if (userArray !== null) {
                setDeletedUser(userArray)
                console.log("userArray", userArray)
                wipeStorage()
                dispatch(switchRoute())
            }


        })

    }
    return (
        <>
            <StatusBar barStyle={'light-content'} />
            <ImageBackground
                source={require('../../assets/images/ImageBackground/bg.png')}
                resizeMode="cover"
                style={{ flex: 1 }}>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.text16600}>Landing page</Text>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={styles.deleteContainer}
                        onPress={() => deleteAccount()}>
                        <Text style={styles.text16600}>Delete</Text>
                    </TouchableOpacity>

                </SafeAreaView>
            </ImageBackground>
        </>
    )
}


function mapStateToProps(state) {
    const { auth } = state
    return {
        auth
    }
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LandingPage)
