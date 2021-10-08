import React from 'react'
import app from './firebase.js'
import { getAuth } from "firebase/auth";

const auth = getAuth();

const Home = ({user})=>{

    const signout = ()=>{
        auth.signOut();
    }

    return(
        <div>
            <h1>Home</h1>
            <p>Hello {user.email}</p>
            <button onClick={()=>signout()}>signout</button>
        </div>
    );
}

export default Home;