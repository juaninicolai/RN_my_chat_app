import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
var firebaseConfig = {
  apiKey: "AIzaSyByqrIx8iAVtnpup-ndREi9ahYFKNo0IOc",
  authDomain: "gifted-chat-b9b5f.firebaseapp.com",
  projectId: "gifted-chat-b9b5f",
  storageBucket: "gifted-chat-b9b5f.appspot.com",
  messagingSenderId: "1045484745228",
  appId: "1:1045484745228:web:7a7cc8b3e67b4d30437429",
};

let app;

app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
