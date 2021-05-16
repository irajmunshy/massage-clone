import { useRoute } from '@react-navigation/core';
import React from 'react';
import { FlatList, ImageBackground } from 'react-native';
import ChatMessage from '../components/ChatMessage';
import chatRoomData from '../data/Chats';
import BG from '../assets/images/bg.jpg';
import InputBox from '../components/InputBox';

const ChatRoomScreen = () => {
    const route = useRoute();

    return (
        <ImageBackground source={BG} style={{width: '100%', height: '100%'}}>
            <FlatList 
                data={chatRoomData.messages}
                renderItem={({item}) => <ChatMessage message={item} />}
                inverted
            />

            <InputBox />
        </ImageBackground>
    );
};

export default ChatRoomScreen;