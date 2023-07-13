import { useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);


    useEffect(() => {
        // Check the initial authorization status when the component mounts
        const checkInitialAuthStatus = () => {
            const storedAuthStatus = localStorage.getItem('isLoggedIn');
            setIsLoggedIn(storedAuthStatus);
        };

        checkInitialAuthStatus();
    }, []);

    // Update the authentication status and store it in local storage
    const updateAuthStatus = (status) => {
        setIsLoggedIn(status);
        localStorage.setItem('isLoggedIn', status);
    };
    return (
        <AuthContext.Provider value={{ isLoggedIn, updateAuthStatus }}>
            {children}
        </AuthContext.Provider>
    );
};