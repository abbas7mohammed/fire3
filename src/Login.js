import React, { useCallback } from 'react'
import app from './firebase.js';
import 'firebase/compat/auth';


const auth = app.auth();


const Login = ()=>{

    const LoginWithFirebase= useCallback(async event => {
            event.preventDefault();
            const {email,password} = event.target.elements;
            await auth.signInWithEmailAndPassword(email.value, password.value)
            .then((res)=>{
                alert("Signup is sucssesful")
            })
            .catch((error)=>{
                alert(error)
            })
        },[],
    );



    return(
        <div>
            <form onSubmit={LoginWithFirebase}>
                <h1>Login</h1>
                <label>
                    Email<br/>
                    <input name="email" type="email" placeholder="email"/>
                </label><br/>
                <label>
                    Password<br/>
                    <input name="password" type="password" placeholder="password"/>
                </label><br/>
                <button type="submit" >Login</button>
            </form>
        </div>
    );
}

export default Login;
