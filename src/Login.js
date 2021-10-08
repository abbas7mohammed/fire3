import React, { useCallback, useRef } from 'react'
import app from './firebase.js';
import 'firebase/compat/auth';


const auth = app.auth();




const Login = ()=>{


    const email = useRef(null)
    const password = useRef(null)


    const LoginWithFirebase= useCallback(async e => {
            e.preventDefault();
            await auth.signInWithEmailAndPassword(email.current.value, password.current.value)
            .then((res)=>{
                alert("Login is sucssesful")
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
                    <input ref={email} type="email" placeholder="email"/>
                </label><br/>
                <label>
                    Password<br/>
                    <input ref={password} type="password" placeholder="password"/>
                </label><br/>
                <button type="submit" >Login</button>
            </form>
        </div>
    );
}

export default Login;
