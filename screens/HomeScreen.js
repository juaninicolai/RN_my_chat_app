/** @format */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, StyleSheet } from "react-native";
import MenuScreen from "./MenuScreen";
import ChatScreen from "./ChatScreen";
import FeedScreen from "./FeedScreen";
import DiscoverScreen from "./DiscoverScreen";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: true,
				headerStyle: { height: 70 },
			}}
		>
			<Tab.Screen
				name="Home"
				component={FeedScreen}
				options={{
					tabBarIcon: () => (
						<Image
							source={require("../assets/icons/icons8-home.png")}
							style={{ width: 20, height: 20 }}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Discover"
				component={DiscoverScreen}
				options={{
					tabBarIcon: () => (
						<Image
							source={require("../assets/icons/icons8-find.png")}
							style={{ width: 20, height: 20 }}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Chat"
				component={ChatScreen}
				options={{
					tabBarIcon: () => (
						<Image
							source={require("../assets/icons/icons8-chat.png")}
							style={{ width: 20, height: 20 }}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Menu"
				component={MenuScreen}
				options={{
					tabBarIcon: () => (
						<Image
							source={require("../assets/icons/icons8-menu.png")}
							style={{ width: 20, height: 20 }}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default HomeScreen;
