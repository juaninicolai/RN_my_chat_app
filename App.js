import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./Auth/LoginScreen";
import RegisterScreen from "./Auth/RegisterScreen";
import ForgotPassword from "./Auth/ForgotPassword";
import HomeScreen from "./Screens/HomeScreen";
import FeedScreen from "./Screens/FeedScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Forgot" component={ForgotPassword} />
          <Stack.Screen name="Overview" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
