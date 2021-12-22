import React, {useState} from 'react';
import s from "../registration/Registration.module.scss";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const signInUser = (e) => {
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert(`User ${user.email} sign in !`)
            })
            .catch((error) => {
                alert('Email or password is incorrect !')
            });
    }

    return (
        <div className={s.registration}>
            <h1>Sign in</h1>
            <form action="">
                Email:
                <div>
                    <input type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
                Password:
                <div>
                    <input type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button onClick={signInUser} type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;