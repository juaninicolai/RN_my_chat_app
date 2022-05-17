import { Input, Button } from "@rneui/base";
import { useState } from "react";
import { View, StyleSheet, Alert, Image } from "react-native";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [imageURL, setImageURL] = useState("");

  const register = () => {
    if (email !== "" && password !== "") {
      createUserWithEmailAndPassword(auth, email, password)
        .then(res => {
          updateProfile(res.user, {
            displayName: name,
            photoURL: imageURL
              ? imageURL
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
        onChangeText={text => setName(text)}
      />
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
      <Input
        placeholder="Enter your image URL"
        label="Profile Picture"
        leftIcon={{ type: "material", name: "face" }}
        value={imageURL}
        onChangeText={text => setImageURL(text)}
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
  }
});

export default RegisterScreen;
