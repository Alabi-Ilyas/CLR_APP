import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

type MessageType = {
  text: string;
  user: 'user' | 'support';
};

const SupportScreen = () => {
  const [messages, setMessages] = useState<MessageType[]>([]); 
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, user: 'user' }]);
      setNewMessage('');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ alignSelf: item.user === 'user' ? 'flex-end' : 'flex-start', margin: 10 }}>
            <Text style={{ backgroundColor: item.user === 'user' ? 'blue' : 'gray', color: 'white', padding: 10, borderRadius: 10 }}>
              {item.text}
            </Text>
          </View>
        )}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', borderTopWidth: 1, borderColor: 'gray', padding: 10 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderColor: 'gray', borderRadius: 10, padding: 5 }}
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
          placeholder="Type a message..."
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

export default SupportScreen;
