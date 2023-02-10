import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { PrimaryInput } from '../../components/inputs'
import { PrimaryButton } from '../../components/button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CommonActions } from '@react-navigation/native';


import {
    setUser,

} from '../../utils/asyncstorage'
import constants from "../../constants";
import { styles } from "./style";
function Signup(props: any) {
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
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: "row", marginStart: 10, alignItems: "center" }}>
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
    )
}

export default Signup