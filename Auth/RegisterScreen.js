/** @format */

import { Input, Button } from "@rneui/base";
import { useState } from "react";
import { View, StyleSheet, Alert, Image } from "react-native";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setName, setPhoto, setPass } from "../Redux/Actions";

const RegisterScreen = ({ navigation }) => {
	const { email, name, password, photoURL } = useSelector(
		state => state.userReducer
	);
	const dispatch = useDispatch();

	const register = () => {
		if (email !== "" && password !== "") {
			createUserWithEmailAndPassword(auth, email, password)
				.then(res => {
					updateProfile(res.user, {
						displayName: name,
						photoURL: photoURL
							? photoURL
							: "https://example.com/jane-q-user/profile.jpg",
					})
						.then(() => {
							// Profile updated!
						})
						.catch(error => {
							// An error occurred
						});
				})
				.catch(err => Alert.alert("signup error", err.message));
			navigation.popToTop();
		}
	};

	return (
		<View style={styles.parentContainer}>
			<View style={styles.container}>
				<Input
					placeholder="Enter your name"
					label="Name"
					leftIcon={{ type: "material", name: "badge" }}
					value={name}
					onChangeText={text => dispatch(setName(text))}
				/>
				<Input
					placeholder="Enter your email"
					label="Email"
					leftIcon={{ type: "material", name: "email" }}
					value={email}
					onChangeText={text => dispatch(setEmail(text))}
				/>
				<Input
					placeholder="Enter your password"
					label="Password"
					leftIcon={{ type: "material", name: "lock" }}
					value={password}
					onChangeText={text => dispatch(setPass(text))}
					secureTextEntry
				/>
				<Input
					placeholder="Enter your image URL"
					label="Profile Picture"
					leftIcon={{ type: "material", name: "face" }}
					value={photoURL}
					onChangeText={text => dispatch(setPhoto(text))}
				/>

				<Button title="Register" style={styles.button} onPress={register} />
				<Image source={require("../assets/cbs_logo.png")}></Image>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		width: 200,
		marginTop: 10,
	},
	container: {
		marginTop: 70,
		flex: 2,
		alignItems: "center",
		padding: 10,
		backgroundColor: "#FFFFFF",
	},
	parentContainer: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
});

export default RegisterScreen;
