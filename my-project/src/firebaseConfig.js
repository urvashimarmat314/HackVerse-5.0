// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyxN-3xIEyEQsQ41eMiqx2PDFDjM7yLNM",
  authDomain: "notice-board-9647d.firebaseapp.com",
  projectId: "notice-board-9647d",
  storageBucket: "notice-board-9647d.appspot.com", // Fixed the domain
  messagingSenderId: "416092692226",
  appId: "1:416092692226:web:9c4e65f76672c699a06c1b",
  measurementId: "G-YT2J7SCG93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); // Initialize Realtime Database

// Export the initialized services
export { app, analytics, database };
