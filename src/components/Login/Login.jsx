import React, { useState, useContext, useEffect } from "react";
import './login.css';
import { AuthContext } from '../../context/AuthContext';
const Login_form = () => {
    const { login, error } = useContext(AuthContext);
    const [token, setToken] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // New state variable

    const handleSubmit = (e) => {
        e.preventDefault();
        if (token.trim() && !isSubmitting) {
            setIsSubmitting(true);
            login(token);
        }
        // Call the login function and pass the password value
    };
    useEffect(() => {
        if (error) {
            setIsSubmitting(false); // Reset isSubmitting if an error occurs during login
        }
    }, [error]);

    const handleInputChange = (e) => {
        setToken(e.target.value);
    };
    return (
        <div className="login">
            <div className="login-bg">
                <p className="text">Login</p>
                <form onSubmit={handleSubmit}>
                    <input type="password"
                        placeholder="Write Your token"
                        value={token}
                        onChange={handleInputChange}
                    />
                    {error && <p className="error-message">{error}</p>}

                </form>
            </div>
        </div>
    );
}

export default Login_form;