import { createContext, useContext, useEffect, useRef, useState } from "react";
import Parse from "parse";

const AuthContext = createContext(undefined);

export const useAuth = () => {
    return useContext(AuthContext);
} 

/**
 * Context component
 * 
 * Eneste ansvar er at holde globale states for auth information som f.eks. currentuser samt sætter staten. 
 * 
 * AuthProvider ligger i roden af programmet og kan derfor tilgåes overalt i systemet. 
 * 
 * @param {
 * } param0 
 * @returns 
 */
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    return (
        <AuthContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

/**
 * 
 * Når en bruger tilgår hjemmesiden kaldes AuthInit som det første, da den ligger i roden af systemet i App.js. 
 * 
 * Hvis en bruger allerede findes sættes den i setCurrentUser og man tilgår derfor /chat
 * 
 * @param {*} param0 
 * @returns 
 */
export const AuthInit = ({children}) => {

    const { setCurrentUser } = useAuth();
    const didRequest = useRef(false)
    // TODO: Check on init om der er en authenticated bruger allerede

    useEffect( () => {

        if (!didRequest.current) {
           
            if (Parse.User.current() !== null) {

                const isAuthenticated = Parse.User.current().getSessionToken();
                const authCondition = isAuthenticated !== undefined;
                console.log("AuthWrapper: The current user is: ", isAuthenticated)
                if (authCondition) {
                    Parse.User.current().then( (currentUser) => {
                        setCurrentUser(currentUser);
                    })
                }
              }

            didRequest.current = true;
        }

    }, [])

    // hvis der findes en bruger
    // setCurrentUser(userObj)

    return (
        <>{children}</>
    )
}