import React from "react";
import { useStorageState } from "./useStorageState";
import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { User } from "firebase/auth";

interface AuthContextProps {
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  session?: User | null;
}

const AuthContext = React.createContext<AuthContextProps>({
  signIn: (email: string, password: string) => {},
  signOut: () => {},
  session: null,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [session, setSession] = React.useState<User | null>();

  return (
    <AuthContext.Provider
      value={{
        signIn: (email: string, password: string) => {
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              setSession(user);
            })
            .catch((e) => {
              const errorCode = e.code;
              const errorMessage = e.message;
              console.log(errorCode, errorMessage);
            });
        },
        signOut: () => {
          setSession(null);
        },
        session,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
