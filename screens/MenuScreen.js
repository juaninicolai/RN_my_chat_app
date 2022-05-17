import React from "react";
import { View, Text, Button } from "react-native";
import { auth } from "../config/firebase";
import { Avatar } from "@rneui/base";
import { signOut } from "firebase/auth";


function MenuScreen({ navigation }) {

  const user = auth.currentUser;
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch(error => console.log("Error logging out: ", error));
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      <Text> {displayName}</Text>
      <Text> {email}</Text>
      <Avatar rounded source={{ uri: photoURL }} />
      <Button title="Logout" onPress={logout}>
        Logout
      </Button>
    </View>
  );
}

export default MenuScreen;