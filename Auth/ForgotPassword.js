import { Input, Button } from "@rneui/base";
import { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebase";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  sendPasswordResetEmail(auth, email)
    .then(() => {})
    .catch(() => {});

  return (
    <View style={styles.parentContainer}>
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
      <Image style={{marginTop: 100}}
      source={require("../assets/cbs_logo.png")}></Image>
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
    flex: 2,
    marginTop: 200,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  parentContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  }
});

export default ForgotPassword;
