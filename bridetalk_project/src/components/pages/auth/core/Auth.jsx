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
    };

    const logout = async () => {
        try {
            await signOut();
            setCurrentUser(null);
        } catch (error) {
            alert('Something went wrong upon log out');
        }
    };

    return (
        <AuthContext.Provider
            value={{ currentUser, setCurrentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

/**
 * When a user access the site, AuthInit gets called as the first thing, while it is in the root of the system in the App.js. If a user exist, it will be set to setCurrentUser, and therefore will be redirected to /chat.
 */
export const AuthInit = ({ children }) => {

    const { setCurrentUser } = useAuth();

    const didRequest = useRef(false)
    //Check on init if there is a authenticated user already.
    useEffect(() => {
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