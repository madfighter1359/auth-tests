import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState, createContext, useContext } from "react";
import { Link } from "expo-router";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const UserContext = createContext("Y");

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<any>(null);

  const handleSignUp = () => {
    if (email && password) {
      console.log("Signing in");

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setUser("lol");
        })
        .catch((e) => {
          const errorCode = e.code;
          const errorMessage = e.message;
          console.log(errorCode, errorMessage);
        });
    } else {
      alert("Please input an email and password!");
      setUser("yo");
    }
  };

  return (
    <UserContext.Provider value={user}>
      <View style={styles.container}>
        <TextInput
          style={{ height: 40 }}
          onChangeText={(value) => setEmail(value)}
          placeholder="Enter email"
          defaultValue={email}
        ></TextInput>
        <TextInput
          style={{ height: 40 }}
          placeholder="Enter password"
          onChangeText={(value) => setPassword(value)}
          defaultValue={password}
        ></TextInput>
        <Pressable onPress={handleSignUp}>
          <Text>Sign Up!</Text>
        </Pressable>
      </View>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
