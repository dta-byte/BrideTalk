import { createContext, useContext, useEffect, useRef, useState } from "react";

const AuthContext = createContext(undefined);

export const useAuth = ({ children }) => {
    return useContext(AuthContext);
} 

export const AuthProvider = ({ chrilden }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const saveAuth = async () => {
        if (user) { 
            authHelper.setAuth(user);
         } else {
            removeAuth
            ();
         }
    }
}