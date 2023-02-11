import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/Login';
import Signup from '../screen/Signup';
import constants from '../constants';

const AuthStack = createNativeStackNavigator();
const AuthStackFunc = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{ headerShown: false }}

        >
            <AuthStack.Screen
                component={Login}
                name={"Login"}

            />
            <AuthStack.Screen
                component={Signup}
                name={constants.ConstStrings.signUp}

            />
        </AuthStack.Navigator>
    )
}

export default AuthStackFunc;
