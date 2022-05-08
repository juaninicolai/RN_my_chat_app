import { Input, Button } from "@rneui/base";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [imageURL, setImageUrl] = useState("");

  const register = () => {
    createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        //signed in
        const user = userCredential.user;
        user
          .updateProfile({
            displayName: name,
            photoURL: imageURL
              ? imageURL
              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
          })
          .then(function () {
            //update
          })
          .catch(function (error) {
            //error
          });
      })
      .catch(error => {
        let errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
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
        onChangeText={text => setImageUrl(text)}
      />

      <Button title="Register" style={styles.button} onPress={register} />
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
  },
});

export default RegisterScreen;
