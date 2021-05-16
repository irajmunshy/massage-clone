import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ChatListItem from '../components/ChatListItem';
import NewMessageButton from '../components/NewMessageButton';
import ChatRooms from '../data/ChatRooms';

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        style={{width: '100%'}}
        data={ChatRooms}
        renderItem={({item}) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />

      <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
