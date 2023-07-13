import { useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import authConfig from '../../config/authConfig';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error,setError]=useState('');
    const login = async (password) => {
        try {
            // Perform the login query to your backend API using Axios and authConfig
            const response = await authConfig.post('/login', {
                "game_table_id": password,
                "token": "tokentest"
            });

            if (response.status === 200) {
                // Store the token in localStorage
                localStorage.setItem('access_token', response.data.payload.tokens.access_token);
                localStorage.setItem('refresh_token', response.data.payload.tokens.refresh_token);

                window.location.pathname = '/login';
            } else {
                // Handle the case where login failed
                // Display an error message or take appropriate action
            }
        } catch (error) {
            setError( error.response.data.message);
            // Handle any errors that occurred during login
            // Display an error message or take appropriate action
        }
    };

    const logout = async () => {
        try {
            // Perform the login query to your backend API using Axios and authConfig
            const response = await authConfig.post('/logout', {
            });
            if (response.status === 200) {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                window.location.pathname = '/';
            } else {
                // Handle the case where login failed
                // Display an error message or take appropriate action
            }
        } catch (error) {
            console.error('Login error:', error);
            // Handle any errors that occurred during login
            // Display an error message or take appropriate action
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout,error,setError }}>
            {children}
        </AuthContext.Provider>
    );
};