// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6nKFuHu6lVoHEgiRqKH3rWhJZFn0McgI",
  authDomain: "acomodoro-29361.firebaseapp.com",
  projectId: "acomodoro-29361",
  storageBucket: "acomodoro-29361.appspot.com",
  messagingSenderId: "841270568251",
  appId: "1:841270568251:web:d9e7cb6b7f294835bac31e",
  measurementId: "G-08TD45ZENJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth };
