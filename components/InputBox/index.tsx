import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';

const InputBox = () => {
    const [message, setMessage] = useState('');

    const onMicrophonePress = () => {
        console.log('hello')
    }
    
    const onSendPress = () => {
        setMessage('');
    }

    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        } else {
            onSendPress();
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="gray" />
                <TextInput 
                    placeholder={'Type a message'}
                    style={styles.textInput} 
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo name="attachment" size={24} style={styles.icons} color="gray" />
                {!message && <Fontisto name="camera" size={24} style={styles.icons} color="gray" />}
            </View>

            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>
                    {   
                        !message ? 
                        <MaterialCommunityIcons name="microphone" size={28} color='#fff' />
                        :
                        <MaterialIcons name="send" size={28} color='#fff' />
                    }
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default InputBox;