import React, {useContext, useEffect, useState} from 'react';
import {auth} from "../../index";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


const AuthContext = React.createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const authState = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
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
            {!loading && children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;