import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState, useContext } from "react";
import { useSession } from "../../ctx";
import { auth } from "../../firebase-config";

export default function Home() {
  const { session } = useSession();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Pressable
        onPress={async () => {
          const token = await auth.currentUser?.getIdToken(true);
          console.log(token);
        }}
      >
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
