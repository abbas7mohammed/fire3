import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Contact from "./contact";
import Login from "./Login";
import Signup from "./Signup";

const Register = ()=>{



    return(
        <Router>
            <div style={{height:70, backgroundColor:"yellow"}}>
                <NavLink to="/Login">
                    Login
                </NavLink>
                <NavLink to="/Signup">
                    Signup
                </NavLink>
                <NavLink to="/Contact">
                    Contact
                </NavLink>
            </div>
            <Switch>
                <Route path="/Login" component={Login} />
                <Route path="/Signup" component={Signup} />
                <Route path="/Contact" component={Contact} />

            </Switch>
        </Router>
    );

}

export default Register;