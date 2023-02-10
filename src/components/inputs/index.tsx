import React from 'react';
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

export const PrimaryInput = ({
    onPress,
    onChangeText,
    maxLength,
    multiline,
    value,
    onSubmitEditing,
    placeholder,
    keyboardType,
    returnKeyType,
    isSecure,
    showSecure,
    onIconpress,
    showOptional,

    textAlignVertical,


    showLock,

    autoCapitalize,

    inputRef,
}) => {

    return (

        <>

            <TouchableOpacity
                style={styles.inputContainer}
                activeOpacity={1}

            >
                <TextInput

                    ref={inputRef}
                    onChangeText={onChangeText}
                    maxLength={maxLength}
                    style={[styles.input, {
                        textAlignVertical: textAlignVertical ? textAlignVertical : "center",
                        paddingRight: Platform.OS === "ios" ? (showOptional ? "25%" : (showSecure || showLock ? "15%" : "5%")) : showOptional ? "29%" : (showSecure || showLock ? "15%" : "5%"),
                    }]}
                    value={value}
                    onSubmitEditing={onSubmitEditing}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    returnKeyType={returnKeyType}
                    secureTextEntry={isSecure}
                    autoCapitalize={autoCapitalize ? autoCapitalize : "none"}

                />
                {
                    showSecure &&
                    <View

                        style={styles.secureIconContainer}
                    >
                        <Ionicons
                            name={isSecure ? "eye-off-outline" : "eye-outline"}

                            size={25}
                            onPress={onIconpress}
                        />
                    </View>
                }



            </TouchableOpacity>
        </>
    )
}