import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState, useContext } from "react";
import { useSession } from "../../ctx";

export default function Home() {
  const { session } = useSession();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Pressable onPress={() => console.log(session)}>
        <Text>View user</Text>
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
