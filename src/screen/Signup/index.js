import React, { useState } from "react";
import {
    View, Text, SafeAreaView, Image,
    ImageBackground, StatusBar
} from 'react-native'
import { PrimaryInput } from '../../components/inputs'
import { PrimaryButton } from '../../components/button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import {
    setUser,
    getDeletedUser
} from '../../utils/asyncstorage'
import { CommonActions } from '@react-navigation/native';
import * as EmailValidator from 'email-validator';
import { connect } from 'react-redux';
import constants from "../../constants";
import { styles } from "./style";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
function Signup(props) {
    const [state, setState] = useState({
        username: '',
        password: '',
        email: '',
        phoneNumber: '',
        confirmPassword: '',
        hidePassword: true,
        hideConfirmPassword: true
    })
    const handlePasswordShow = () => {
        setState({
            ...state,
            hidePassword: !state.hidePassword
        })
    }
    const handleConfirmPasswordShow = () => {
        setState({
            ...state,
            hideConfirmPassword: !state.hideConfirmPassword
        })
    }

    const handleSubmit = () => {
        let loginCred = {
            "username": state.username,
            "password": state.password
        }
        if (state.username.length === 0) {
            Toast.show({
                text1: constants.ConstStrings.statiq,
                text2: constants.ConstStrings.enterUserName,
                type: "error",
                position: "top"
            });
            return 1;
        }
        if (state.email.length === 0) {
            Toast.show({
                text1: constants.ConstStrings.statiq,
                text2: constants.ConstStrings.enterYourEmail,
                type: "error",
                position: "top"
            });
            return 1;
        }
        if (!EmailValidator.validate(state.email.toLowerCase())) {
            Toast.show({
                text1: constants.ConstStrings.statiq,
                text2: constants.ConstStrings.pleaseEnterValidEmail,
                type: "error",
                position: "top"
            });
            return 1;
        }
        if (state.phoneNumber.length === 0) {
            Toast.show({
                text1: constants.ConstStrings.statiq,
                text2: constants.ConstStrings.enterYourPhoneNumber,
                type: "error",
                position: "top"
            });
            return 1;
        }

        if (state.password.length === 0) {
            Toast.show({
                text1: constants.ConstStrings.statiq,
                text2: constants.ConstStrings.enterYourPassword,
                type: "error",
                position: "top"
            });
            return 1;
        }
        if (state.confirmPassword.length === 0) {
            Toast.show({
                text1: constants.ConstStrings.statiq,
                text2: constants.ConstStrings.enterYourConfirmPassword,
                type: "error",
                position: "top"
            });
            return 1;
        }
        if (state.password != state.confirmPassword) {
            Toast.show({
                text1: constants.ConstStrings.statiq,
                text2: constants.ConstStrings.passwordNotMatch,
                type: "error",
                position: "top"
            });
            return 1;
        }
        setUser(loginCred).then(( )=> {
            props.navigation.dispatch(CommonActions.goBack())
        }).catch((err)=>{
            console.log("err",err)
        })
     
    }
    return (
        <>
            <StatusBar barStyle={'light-content'} />

            <ImageBackground
                source={require('../../assets/images/ImageBackground/bg.png')}
                resizeMode="cover"
                style={{ flex: 1 }}>
                <View style={styles.headerContainer}>
                    <Image
                        resizeMode="contain"
                        style={styles.image}
                        source={require('../../assets/images/Statiq/Statiqremovebg.png')}
                    />
                    {/* <Text style={styles.text16600}>Statiq</Text> */}

                </View>

                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.container}
                >


                    <View style={styles.signupContainerBack}>
                        <Ionicons
                            name={"arrow-back"}
                            size={25}
                            onPress={() => props.navigation.dispatch(CommonActions.goBack())}
                        />

                        <Text style={styles.text18600}>{constants.ConstStrings.signUp}</Text>
                    </View>

                    <View style={styles.subContainer}>


                        <View style={styles.inputContainer}>
                            <PrimaryInput
                                placeholder={constants.ConstStrings.username}
                                onChangeText={(text) => setState({
                                    ...state,
                                    username: text
                                })}
                                value={state.username}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <PrimaryInput
                                placeholder={constants.ConstStrings.email}
                                onChangeText={(text) => setState({
                                    ...state,
                                    email: text
                                })}
                                value={state.email}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <PrimaryInput
                                placeholder={constants.ConstStrings.phoneNumber}
                                onChangeText={(text) => setState({
                                    ...state,
                                    phoneNumber: text
                                })}
                                maxLength={10}
                                keyboardType={"number-pad"}
                                value={state.phoneNumber}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <PrimaryInput
                                placeholder={constants.ConstStrings.password}
                                showSecure={true}
                                isSecure={state.hidePassword}
                                onIconpress={handlePasswordShow}
                                onChangeText={(password) => {
                                    setState({
                                        ...state,
                                        password: password
                                    })
                                }}
                                value={state.password}
                            />


                        </View>
                        <View style={styles.inputContainer}>
                            <PrimaryInput
                                placeholder={constants.ConstStrings.confirmPassword}
                                showSecure={true}
                                isSecure={state.hideConfirmPassword}
                                onIconpress={handleConfirmPasswordShow}
                                onChangeText={(password) => {
                                    setState({
                                        ...state,
                                        confirmPassword: password
                                    })
                                }}
                                value={state.confirmPassword}
                            />


                        </View>

                        <View style={styles.buttonContainer}>
                            <PrimaryButton
                                title={constants.ConstStrings.submit}
                                onPress={handleSubmit}
                            />
                        </View>


                    </View>
                </KeyboardAwareScrollView>
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
)(Signup)