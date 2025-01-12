// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration for the Notice Board
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXX-YOUR-API-KEY",
  authDomain: "notice-board-app.firebaseapp.com",
  databaseURL: "https://notice-board-app-default-rtdb.firebaseio.com",
  projectId: "notice-board-app",
  storageBucket: "notice-board-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export the database
export const database = getDatabase(app);
