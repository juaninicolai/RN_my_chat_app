/** @format */

import React, { useLayoutEffect, useState, useCallback } from "react";
import { View } from "react-native";
import { auth, db } from "../config/firebase";
import { Avatar } from "@rneui/base";
import { GiftedChat } from "react-native-gifted-chat";
import {
	collection,
	query,
	orderBy,
	onSnapshot,
	addDoc,
} from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const ChatScreen = () => {
	const { email, name } = useSelector(state => state.userReducer);

	const photoURL = auth?.currentUser?.photoURL;

	const [messages, setMessages] = useState([]);
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions(
			{
				headerLeft: () => (
					<View style={{ marginLeft: 20 }}>
						<Avatar rounded source={{ uri: photoURL }} />
					</View>
				),
			},
			[navigation]
		);
	});

	useLayoutEffect(() => {
		const collectionRef = collection(db, "chats");
		const q = query(collectionRef, orderBy("createdAt", "desc"));

		const unsubscribe = onSnapshot(q, querySnapshot => {
			setMessages(
				querySnapshot.docs.map(doc => ({
					_id: doc.data()._id,
					createdAt: doc.data().createdAt.toDate(),
					text: doc.data().text,
					user: doc.data().user,
				}))
			);
		});
		return unsubscribe;
	}, []);

	const onSend = useCallback((messages = []) => {
		setMessages(previousMessages =>
			GiftedChat.append(previousMessages, messages)
		);
		const { _id, createdAt, text, user } = messages[0];
		addDoc(collection(db, "chats"), {
			_id,
			createdAt,
			text,
			user,
		});
	}, []);

	return (
		<GiftedChat
			messages={messages}
			showAvatarForEveryMessage={true}
			onSend={messages => onSend(messages)}
			user={{
				_id: email,
				name: name,
				avatar: photoURL,
			}}
		/>
	);
};

export default ChatScreen;
