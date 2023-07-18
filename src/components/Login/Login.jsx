import React, { useState, useContext, useEffect, useRef } from "react";
import './login.css';
import { AuthContext } from '../../context/AuthContext';
const Login_form = () => {
    const { login, error } = useContext(AuthContext);
    const [token, setToken] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // New state variable
    const inputRef = useRef(null);
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

    useEffect(() => {
        // Set the focus on the input element when the component mounts
        inputRef.current.focus();
    }, []);
    const handleBlur = ()=>{
        inputRef.current.focus();
    }

    const handleInputChange = (e) => {
        setToken(e.target.value);
    };

    document.addEventListener("click", handleInputChange);

    return (
        <div className="login">
            <div className="login-bg" style={{opacity:0}}>
                <p className="text">Login</p>
                <form onSubmit={handleSubmit}>
                    <input type="password"
                        placeholder="Write Your token"
                        value={token}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        ref={inputRef}
                    />
                    {error && <p className="error-message">{error}</p>}

                </form>
            </div>
        </div>
    );
}

export default Login_form;