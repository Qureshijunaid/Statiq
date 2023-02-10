import React from 'react';
import {
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';

import constants from '../../constants';
import { styles } from './styles';

export const PrimaryButton = ({
    borderColor,
    backgroundColor,
    title,
    onPress,
    paddingVertical,
    borderRadius,
    textColor,
    multipleClickDisabled
}) => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
            disabled={multipleClickDisabled ? multipleClickDisabled : false}
            style={[
                styles.primaryButtonContainer,
                {
                    paddingVertical: constants.vh(16),
                    borderRadius: 10
                }
            ]}>
            <Text style={styles.text16600}>{title}</Text>

        </TouchableOpacity>
    )
}