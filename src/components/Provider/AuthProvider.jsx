import { useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import authConfig from '../../config/authConfig';
import { createSocketConnection } from "../../config/socket";
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const handleLoginSuccess = (response) => {
        localStorage.setItem('access_token', response?.data?.payload?.tokens?.access_token);
        localStorage.setItem('refresh_token', response?.data?.payload?.tokens?.refresh_token);
        const game_id = response?.data?.payload?.game?.id;
        const socket = createSocketConnection();
        socket.emit(`data`, { game_id });
        window.location.pathname = '/';
    };

    const login = async (token) => {
        try {
            const response = await authConfig.post('/login', {
                "token": token
            });
            console.log(response);
            if (response.status === 200) {
                handleLoginSuccess(response);
            }

        } catch (error) {
            setError(error?.response?.data?.message);
            // Handle any errors that occurred during login
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
            }
        } catch (error) {
            console.error('Login error:', error);
            // Handle any errors that occurred during login
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, error, setError }}>
            {children}
        </AuthContext.Provider>
    );
};