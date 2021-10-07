import { React, useEffect, useState } from 'react';
import app from './firebase.js';
import { getAuth } from "firebase/auth";

import './App.css';
import Login from './Login';
import Home from './Home.js';
import Signup from './Signup.js';
import Register from './register.js';

const auth = getAuth(); 
const user = auth.currentUser;

function App() {


  const [user, setUser] = useState(null)


  useEffect((user)=>{
    auth.onAuthStateChanged(user=>{
      setUser(user);
    })
  });

  return (
    <div>
      {user ? <Home user={user}/> : <Register />}
    </div>
  );
}

export default App;
