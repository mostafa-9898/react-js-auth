import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({})

function AuthProvider({ children }) {

    // the user's data will add on here when he/she login
    const [auth, setAuth] = useState({})

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;