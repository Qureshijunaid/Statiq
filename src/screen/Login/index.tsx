import React, { useState } from "react";
import {
    View, Text, SafeAreaView, TouchableOpacity,
    StatusBar,
    ImageBackground
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect, useDispatch } from 'react-redux';
import { PrimaryInput } from '../../components/inputs';
import { PrimaryButton } from '../../components/button';
import {
    setUser,

} from '../../utils/asyncstorage'
import { switchRoute } from '../../actions/auth';
import constants from "../../constants";
import { styles } from "./style";
function Login(props) {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        username: '',
        password: null,
        hidePassword: false
    })
    const handlePasswordShow = () => {
        setState({
            ...state,
            hidePassword: !state.hidePassword
        })
    }
    const handleSubmit = () => {
        let loginCred = {
            username: state.username,
            password: state.password
        }
        console.log("handleSubmit")
        setUser(loginCred)
        dispatch(switchRoute())

    }
    return (
        <>
            <StatusBar barStyle={'light-content'} />
            <ImageBackground
                source={require('../../assets/images/ImageBackground/bg.png')}
                resizeMode="cover"
                style={{ flex: 1 }}>
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                    <SafeAreaView style={styles.container}>
                        <View style={styles.subContainer}>


                            <Text style={styles.text18600}>{constants.ConstStrings.login}</Text>
                            <View style={styles.inputContainer}>
                                <PrimaryInput
                                    placeholder={"username"}
                                    onChangeText={(text: string) => setState({
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
                                    onChangeText={(password: any) => {
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
                    </SafeAreaView>
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
function mapDispatchToProps(dispatch: any) {
    return {
        dispatch,
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)