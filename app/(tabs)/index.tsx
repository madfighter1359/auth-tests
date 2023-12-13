import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState, useContext } from "react";
import { UserContext } from "../sign-up";

export default function Home() {
  const user = useContext(UserContext);
  return (
    // <UserContext.Provider value={user}>
    <View style={styles.container}>
      <Text>Home</Text>
      <Pressable onPress={() => console.log(user)}>
        <Text>View user</Text>
      </Pressable>
    </View>
    //  </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
