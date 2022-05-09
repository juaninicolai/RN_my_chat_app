import { Input, Button } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage)
    });
  };

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace('Chat');
      } else {
        navigation.canGoBack() &&
        navigation.popToTop();
      }
    });
    return unsubscribe;
  }, []);


  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your email"
        label="Email"
        leftIcon={{ type: "material", name: "email" }}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Input
        placeholder="Enter your password"
        label="Password"
        leftIcon={{ type: "material", name: "lock" }}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button title="Sign in" style={styles.button} onPress={signIn}/>
      <Button
        title="Register"
        style={styles.button}
        onPress={() => navigation.navigate("Register")}
      />
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
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
});
