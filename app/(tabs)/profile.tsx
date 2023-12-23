import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { auth } from "../../firebase-config";
import { useSession } from "../../ctx";
import { sendEmailVerification } from "firebase/auth";

export default function Home() {
  const { signOut, session } = useSession();

  return (
    <View style={styles.container}>
      {session ? (
        <>
          <Pressable onPress={() => signOut()}>
            <Text>Sign Out</Text>
          </Pressable>
          <Pressable
            onPress={async () => {
              if (auth.currentUser)
                await sendEmailVerification(auth.currentUser);
            }}
          >
            <Text>Email</Text>
          </Pressable>
        </>
      ) : (
        <>
          <Link href="sign-up-new">
            <Text>Sign Up!</Text>
          </Link>
          <Link href="sign-in-new">
            <Text>Sign In!</Text>
          </Link>
        </>
      )}
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
