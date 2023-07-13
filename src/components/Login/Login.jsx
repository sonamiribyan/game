import React from "react";
import './login.css';

const Login_form = () => {
    return (
        <div className="login">
        <div className="login-bg">
            <p className="text">Login</p>
            <form action="">
                <input type="password" placeholder="Write Your Password" />
            </form>
        </div>
        </div>
    );
}

export default Login_form;