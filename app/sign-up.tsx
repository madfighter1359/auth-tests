import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState, createContext, useContext } from "react";
import { Link } from "expo-router";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useSession } from "../ctx";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useSession();

  const handleSignUp = () => {
    if (email && password) {
      console.log("Signing in");

      signIn(email, password);
    } else {
      alert("Please input an email and password!");
    }
  };

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
