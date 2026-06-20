// ──────────────────────────────────────────────────────────────
//  Firebase setup for The Record
//  1. Create a project at https://console.firebase.google.com
//  2. Add a Web App, copy its config object into firebaseConfig below
//  3. In the console enable: Authentication (Email/Password),
//     Firestore Database, and Storage
//  You can bump the SDK version (11.0.0) to the latest if you like.
// ──────────────────────────────────────────────────────────────
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "PASTE_YOURS",
  authDomain: "PASTE_YOURS.firebaseapp.com",
  projectId: "PASTE_YOURS",
  storageBucket: "PASTE_YOURS.firebasestorage.app",
  messagingSenderId: "PASTE_YOURS",
  appId: "PASTE_YOURS",
  measurementId: "PASTE_YOURS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
