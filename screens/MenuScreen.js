/** @format */

import React from "react";
import { View, Text, Button } from "react-native";
import { auth } from "../config/firebase";
import { Avatar } from "@rneui/base";
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setPass } from "../Redux/Actions";

function MenuScreen({ navigation }) {
	const { email, name } = useSelector(state => state.userReducer);
	const dispatch = useDispatch();

	const user = auth.currentUser;
	const userPhotoURL = user.photoURL;

	const logout = () => {
		signOut(auth)
			.then(() => {
				navigation.replace("Login");
			})
			.catch(error => console.log("Error logging out: ", error));
		dispatch(setEmail(""));
		dispatch(setPass(""));
	};

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text> {name}</Text>
			<Text> {email}</Text>
			<Avatar rounded source={{ uri: userPhotoURL }} />
			<Button title="Logout" onPress={logout}>
				Logout
			</Button>
		</View>
	);
}

export default MenuScreen;
