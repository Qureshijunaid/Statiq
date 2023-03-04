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
import { styles } from './style';

const SplashScreen = (props) => {
    return (
        <>

            <ImageBackground
                source={require('../../assets/images/ImageBackground/bg.png')}
                resizeMode="cover"
                style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Image
                        resizeMode="contain"
                        source={require('../../assets/images/Statiq/Statiqremovebg.png')}
                    />

                </View>


            </ImageBackground>

        </>
    )
}
export default SplashScreen