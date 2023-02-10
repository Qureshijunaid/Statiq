import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import constants from '../constants';

//SplashScreen
import SplashScreen from '../screen/Splash';



const SplStack = createNativeStackNavigator();
const SplashStack = () => {
    return (
        <SplStack.Navigator
            screenOptions={{ headerShown: false }}

        >
            <SplStack.Screen
                component={SplashScreen}
                name={constants.ConstStrings.splashScreen}
                options={{ gestureEnabled: false }}
            />

        </SplStack.Navigator>
    )
}

export default SplashStack;