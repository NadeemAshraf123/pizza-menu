import React from 'react'
import { useState, createContex, useContext } from 'react'

const AuthContext = createContex(null);


const Auth = () => {
    const [user, setUser] = useState(null);

    const login = user => {
        setUser(user)
    }
    const logout = () => {
        setUser(null);
    }

  return (
    <div>
        <AuthContext.Provider value={{user, login, logout}} >
      {/* {children} */}
        </AuthContext.Provider>
    </div>
  )
}

export default Auth

export const useAuth = () => {
    return useContext(AuthContext)
};
