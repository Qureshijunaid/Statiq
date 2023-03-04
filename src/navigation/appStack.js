import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from '../screen/LandingPage';
import constants from '../constants';

const AppStack = createNativeStackNavigator();
const AppStackFunc = () => {
    return (
        <AppStack.Navigator
            screenOptions={{ headerShown: false }}

        >
            <AppStack.Screen
                component={LandingPage}
                name={constants.ConstStrings.landingPage}

            />
      
        </AppStack.Navigator>
    )
}

export default AppStackFunc;
