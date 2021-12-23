import React, {useContext, useEffect, useState} from 'react';
import {auth} from "../../index";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();

    const register = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const signIn = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const signOut = () => {
        return auth.signOut()
    }

    useEffect(() => {
        const authState = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return authState
    }, [])


    const values = {
        currentUser,
        register,
        signIn,
        signOut
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;