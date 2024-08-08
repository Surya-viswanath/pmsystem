

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    const signUp = async (name, email,phone,password) => {
        try {
            const response = await axios.post('http://localhost:4008/Customersign', { name, email,phone,password });
            setUser(response.data.user);
            return response;
        } catch (error) {
            console.error('Sign Up failed', error);
            throw error;
        }
    };

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:4008/customerlogin', { email, password });
            setUser(response.data.user);
            console.log('Received response:', response.data);
            return response;
        } catch (error) {
            console.error('Login failed', error);
            throw error; // Ensure errors are propagated correctly
        }
    };
    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, signUp, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);