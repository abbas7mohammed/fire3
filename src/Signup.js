import React, { useCallback } from 'react'
import app from './firebase.js';
import 'firebase/compat/auth'
import {GoogleAuthProvider} from 'firebase/auth'



const provider = new GoogleAuthProvider();
const auth = app.auth();


const Signup = ()=>{

    const SignupWithFirebase= useCallback(async event => {
            event.preventDefault();
            const {email,password} = event.target.elements;
            await auth.createUserWithEmailAndPassword(email.value, password.value)
            .then((res)=>{
                alert("login is sucssesful")
            })
            .catch((error)=>{
                alert(error)
            })
        },[],
    );
    const SignupWithGoogle = ()=>{
         auth.signInWithPopup(provider)
        .then(()=>{
            alert("signed with google")
        })
        .catch((error)=>{
            alert(error)
        })
    }

    return(
        <div>
            <form onSubmit={SignupWithFirebase}>
                <h1>Sign up</h1>
                <label>
                    Email<br/>
                    <input name="email" type="email" placeholder="email"/>
                </label>
                <label>
                    Password<br/>
                    <input name="password" type="password" placeholder="password"/>
                </label><br/>
                <button type="submit" >Sign up</button>
            </form>

            <button onClick={()=>{SignupWithGoogle()}}>Signup with Google</button>

        </div>
    );
}

export default Signup;
