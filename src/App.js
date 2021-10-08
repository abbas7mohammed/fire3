import { React, useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";

import './App.css';
import Home from './Home.js';
import Register from './register.js';
import app from './firebase.js'
const auth = app.auth(); 



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
