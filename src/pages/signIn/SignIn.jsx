import React, {useState} from 'react';
import {useAuth} from "../../context/auth/AuthContext";
import s from "../registration/Registration.module.scss";

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signIn} = useAuth();

    const signInUser = async (e) => {
        e.preventDefault()
        try {
            await signIn(email, password)
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className={s.registration}>
            <h1 >Sign in</h1>
            <form action="">
                <div className={s.inputWrap}>
                    <input type="email"
                           placeholder='Email'
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={s.inputWrap}>
                    <input type="password"
                           placeholder='Password'
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button
                    className={s.button}
                    onClick={signInUser}
                    type="submit">Sign in
                </button>
            </form>
        </div>
    );
};

export default SignIn;