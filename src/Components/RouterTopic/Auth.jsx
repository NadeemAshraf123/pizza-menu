import React from 'react';
import { useState, createContext, useContext } from 'react'

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(()=>{
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });
    const login = (user) => {
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    };
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    }
  return (
    <div>
        <AuthContext.Provider value={{login, logout}} >
      {children}
        </AuthContext.Provider>
    </div>
)}
export default AuthProvider
export const useAuth = () => {
    return useContext(AuthContext)
};
