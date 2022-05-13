import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image } from "react-native";
import SettingsScreen from "./SettingsScreen";
import ChatScreen from "./ChatScreen";
import FeedScreen from "./FeedScreen";
import DiscoverScreen from "./DiscoverScreen";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
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
        name="Settings"
        component={SettingsScreen}
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
