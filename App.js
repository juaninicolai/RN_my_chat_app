/** @format */

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./Auth/LoginScreen";
import RegisterScreen from "./Auth/RegisterScreen";
import ForgotPassword from "./Auth/ForgotPassword";
import HomeScreen from "./Screens/HomeScreen";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";

export default function App() {
	const Stack = createStackNavigator();
	return (
		<Provider store={Store}>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerTitle: "",
						headerTransparent: true,
					}}
				>
					<Stack.Screen name="Login" component={LoginScreen} />
					<Stack.Screen name="Register" component={RegisterScreen} />
					<Stack.Screen name="Forgot Password" component={ForgotPassword} />
					<Stack.Screen name="Overview" component={HomeScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
