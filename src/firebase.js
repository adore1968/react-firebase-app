import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwxzYIxzhZqPW4Tn-835MOvELqipW5GqE",
  authDomain: "react-fb-auth-be6aa.firebaseapp.com",
  projectId: "react-fb-auth-be6aa",
  storageBucket: "react-fb-auth-be6aa.appspot.com",
  messagingSenderId: "940222251401",
  appId: "1:940222251401:web:c73f4de2451b0508eee158",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
