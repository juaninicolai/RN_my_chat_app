/** @format */

import { Input, Button } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setPass } from "../Redux/Actions";

const LoginScreen = ({ navigation }) => {
	const { email, password } = useSelector(state => state.userReducer);
	const dispatch = useDispatch();

	const signIn = () => {
		signInWithEmailAndPassword(auth, email, password).catch(error => {
			const errorMessage = error.message;
			alert(errorMessage);
		});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				navigation.replace("Overview");
			} else {
				navigation.canGoBack() && navigation.popToTop();
			}
		});
		return unsubscribe;
	}, []);

	return (
		<View style={styles.parentContainer}>
			<View style={styles.container}>
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
				<Button title="Sign in" style={styles.button} onPress={signIn} />
				<Button
					title="Register"
					style={styles.button}
					onPress={() => navigation.navigate("Register")}
				/>
				<Button
					title="Forgot password"
					style={styles.button}
					onPress={() => navigation.navigate("Forgot Password")}
				></Button>
				<Image
					style={{ marginTop: 50 }}
					source={require("../assets/cbs_logo.png")}
				></Image>
			</View>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	button: {
		width: 200,
		marginTop: 10,
	},
	container: {
		marginTop: 60,
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
