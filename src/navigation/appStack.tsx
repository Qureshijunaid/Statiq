import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from '../screen/LandingPage';
import Menu from '../screen/Menu';
import Chart from '../components/Chart';
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
            <AppStack.Screen
                component={Menu}
                name={constants.ConstStrings.menu}

            />
            <AppStack.Screen
                component={Chart}
                name={"Chart"}

            />
        </AppStack.Navigator>
    )
}

export default AppStackFunc;
