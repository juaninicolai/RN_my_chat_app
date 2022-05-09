import React, { useLayoutEffect, useState, useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import { signOut } from "firebase/auth";
import { auth } from '../config/firebase';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from '@rneui/base';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatScreen = ({navigation}) => {

    const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerLeft: ()=> (
                <View style={{marginLeft: 20}}>
                <Avatar
                    rounded
                    source={{uri: auth?.currentUser?.photoURL}}
                />
                </View>
            ),
            headerRight: ()=> (
              <TouchableOpacity 
                    style={{marginRight: 30}}
                    onPress={logout}
               >  
                <AntDesign name="logout" size={24} color="black" />
                </TouchableOpacity>  
        )
        })
    }, []);
    
    const logout = () => {
            signOut(auth).then(() => {
                    // Sign-out successful.
                    navigation.replace('Login');
                }).catch((error) => {
                    // An error happened.
                });
        }
    
    return (
        <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
}

export default ChatScreen;