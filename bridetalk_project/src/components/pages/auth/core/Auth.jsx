import { createContext, useContext, useState, useRef, useEffect } from "react";
import { signIn, signOut } from "../../../../services/parse-functions";
import Parse from 'parse';

const AuthContext = createContext(undefined);

export const useAuth = () => {
    return useContext(AuthContext);
} 

// Provider component wraps the entire app, makes auth object available to child component that calls useAuth().
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const login = async (user) => {
        await signIn(user);
    }

    const logout = async () => {

        try {
            await signOut();
            setCurrentUser(null);
        } catch (error) {
            alert('Something went wrong upon log out');
        }
    }

    return (
        <AuthContext.Provider value={{currentUser, setCurrentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

/**
 * 
 * Når en bruger tilgår hjemmesiden kaldes AuthInit som det første, da den ligger i roden af systemet i App.js. 
 * 
 * Hvis en bruger allerede findes sættes den i setCurrentUser og man tilgår derfor /chat
 
 */
export const AuthInit = ({children}) => {

       const { setCurrentUser } = useAuth();
      
       const didRequest = useRef(false)
//Check on init om der er en authenticated bruger allerede

    useEffect( () => {
        if (!didRequest.current) {
            if (Parse.User.current() !== null) {

                const isAuthenticated = Parse.User.current().getSessionToken();
                const authCondition = isAuthenticated !== undefined;
             
                if (authCondition) {
                    const user = Parse.User.current();
                    setCurrentUser(user)
                } else {
                    setCurrentUser(null);
                }
              }
            didRequest.current = true;
        }
    }, [])
     return (
         <>{children}</>
     )
}