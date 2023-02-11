import React, { useState } from "react";
import {
    View, Text, SafeAreaView, TouchableOpacity,
    StatusBar,
    ImageBackground,
    Keyboard
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect, useDispatch } from 'react-redux';
import { PrimaryInput } from '../../components/inputs';
import { PrimaryButton } from '../../components/button';
import {
    setUser,
    getDeletedUser
} from '../../utils/asyncstorage'
import { switchRoute } from '../../actions/auth';
import Toast from 'react-native-toast-message';
import constants from "../../constants";
import { styles } from "./style";
function Login(props) {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        username: '',
        password: '',
        hidePassword: true
    })
    const handlePasswordShow = () => {
        setState({
            ...state,
            hidePassword: !state.hidePassword
        })
    }
    const equalsCheck = (data, list) => {
        if (list.some(item => item.username === data.username || item.password === data.password)) {
            return true;
        } else {
            return false
        }
    }

    const handleSubmit = async () => {
        Keyboard.dismiss()
        let loginCred = {
            "username": state.username,
            "password": state.password
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
        getDeletedUser().then(deleteUser => {
            console.log("deleteUser", deleteUser)
            if (deleteUser !== null) {
                if (equalsCheck(loginCred, deleteUser)) {
                    Toast.show({
                        text1: constants.ConstStrings.examAi,
                        text2: "Oops Already you deleted account, please signup again",
                        type: "error",
                        position: "top"
                    });
                } else {

                    console.log("handleSubmit")
                    setUser(loginCred)
                    dispatch(switchRoute())
                }
            } else {
                console.log("handleSubmit")
                setUser(loginCred)
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
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.container}
                >

                    <View style={styles.subContainer}>


                        <Text style={styles.text18600}>{constants.ConstStrings.login}</Text>
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
                        <TouchableOpacity style={{ alignSelf: "flex-end" }}
                            onPress={() => props.navigation.navigate(constants.ConstStrings.signUp)}
                        >
                            <Text style={{ textDecorationLine: "underline" }}>{constants.ConstStrings.signUp}</Text>
                        </TouchableOpacity>
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
)(Login)