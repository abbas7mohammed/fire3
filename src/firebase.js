import fs from "firebase/compat/app";


const firebaseConfig = {
  apiKey: "AIzaSyBzJVNkPL3H-QOnvoBDuB0pLDQ8SMQAEWA",
  authDomain: "fone-7.firebaseapp.com",
  databaseURL: "https://fone-7.firebaseio.com",
  projectId: "fone-7",
  storageBucket: "fone-7.appspot.com",
  messagingSenderId: "467965568346",
  appId: "1:467965568346:web:081961aed1c2a3d9fa3f63"
};

const app = fs.initializeApp(firebaseConfig);

export default app;