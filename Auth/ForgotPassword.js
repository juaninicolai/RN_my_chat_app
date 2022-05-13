import { Input, Button } from "@rneui/base";
import { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebase";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  sendPasswordResetEmail(auth, email)
    .then(() => {})
    .catch();

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your email"
        label="Email"
        leftIcon={{ type: "material", name: "email" }}
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <Button
        title="Send"
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      />
      <Image source={require("../assets/cbs_logo.png")}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
});

export default ForgotPassword;
