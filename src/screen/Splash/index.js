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
                        style={styles.image}
                        source={require('../../assets/images/ExamRoom/ExamRoom.png')}
                    />
                    <Text style={styles.text16600}>ExamRoom.AI</Text>

                </View>


            </ImageBackground>

        </>
    )
}
export default SplashScreen