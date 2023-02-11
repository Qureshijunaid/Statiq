import React, { useState } from "react";
import {
    View, Text, SafeAreaView, TouchableOpacity,
    ImageBackground, StatusBar
} from 'react-native'
import { PrimaryInput } from '../../components/inputs'
import { PrimaryButton } from '../../components/button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';
import constants from "../../constants";
import { styles } from "./style";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
function Signup(props) {
    const [state, setState] = useState({
        username: '',
        password: null,
        firstname: '',
        lastname: '',
        hidePassword: true
    })
    const handlePasswordShow = () => {
        setState({
            ...state,
            hidePassword: !state.hidePassword
        })
    }
    const handleSubmit = () => {
      
        if (state.firstname.length === 0) {
            Toast.show({
                text1: constants.ConstStrings.examAi,
                text2: constants.ConstStrings.enterYourFirstName,
                type: "error",
                position: "top"
            });
            return 1;
        }
        if (state.lastname.length === 0) {
            Toast.show({
                text1: constants.ConstStrings.examAi,
                text2: constants.ConstStrings.enterYourLastName,
                type: "error",
                position: "top"
            });
            return 1;
        }
        if (state.username.length === 0) {
            Toast.show({
                text1: constants.ConstStrings.examAi,
                text2: constants.ConstStrings.enterUserName,
                type: "error",
                position: "top"
            });
            return 1;
        }
        if (state.password.length === 0) {
            Toast.show({
                text1: constants.ConstStrings.examAi,
                text2: constants.ConstStrings.enterYourPassword,
                type: "error",
                position: "top"
            });
            return 1;
        }
     
    }
    return (
        <>
            <StatusBar barStyle={'light-content'} />
            <ImageBackground
                source={require('../../assets/images/ImageBackground/bg.png')}
                resizeMode="cover"
                style={{ flex: 1 }}>

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
                                placeholder={"fristname"}
                                onChangeText={(text) => setState({
                                    ...state,
                                    firstname: text
                                })}
                                value={state.firstname}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <PrimaryInput
                                placeholder={"lastname"}
                                onChangeText={(text) => setState({
                                    ...state,
                                    lastname: text
                                })}
                                value={state.lastname}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <PrimaryInput
                                placeholder={"username"}
                                onChangeText={(text) => setState({
                                    ...state,
                                    username: text
                                })}
                                value={state.username}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <PrimaryInput
                                placeholder={"password"}
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
                                onPress={undefined}

                                maxLength={undefined}
                                multiline={undefined}

                                onSubmitEditing={undefined}
                                keyboardType={undefined}
                                returnKeyType={undefined}

                                showOptional={undefined}
                                textAlignVertical={undefined}
                                showLock={undefined} autoCapitalize={undefined} inputRef={undefined} />


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