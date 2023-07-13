import React, { useState, useContext } from "react";
import './login.css';
import { AuthContext } from '../../context/AuthContext';
const Login_form = () => {
    const { login, error } = useContext(AuthContext);
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.trim()) {
            login(password);
        }
        // Call the login function and pass the password value
    };

    const handleInputChange = (e) => {
        setPassword(e.target.value);
    };
    return (
        <div className="login">
            <div className="login-bg">
                <p className="text">Login</p>
                <form onSubmit={handleSubmit}>
                    <input type="password"
                        placeholder="Write Your Password"
                        value={password}
                        onChange={handleInputChange}
                    />
                    {error && <p className="error-message">{error}</p>}

                </form>
            </div>
        </div>
    );
}

export default Login_form;