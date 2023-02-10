import React, { useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Image,
    Text,
    StatusBar,
    StyleSheet,
    Animated,
    Easing,
    ImageBackground
} from 'react-native';
import { connect } from 'react-redux';

import constants from '../../constants';

const SplashScreen = (props) => {
    return (
        <>

            <ImageBackground
                source={require('../../assets/images/ImageBackground/bg.png')}
                resizeMode="cover"
                style={{ flex: 1 }}>
                <Text>ExamRoom.AI</Text>
            </ImageBackground>

        </>
    )
}
export default SplashScreen