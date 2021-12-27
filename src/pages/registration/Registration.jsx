import React, {useState} from 'react';
import s from './Registration.module.scss'
import {useAuth} from "../../context/auth/AuthContext";

const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {register, signIn} = useAuth()

    const entry = async (email, password) => {
        try {
            await signIn(email, password)
        }catch (error){
            alert(error.message)
        }
    }

    const regNewUser = async (e) => {
        e.preventDefault()

        try {
            await register(email, password)
        }catch (error){
            alert(error.message)
        }

        await entry(email, password)
    }

    return (
        <div className={s.registration}>
            <h1>Register</h1>
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
                    onClick={regNewUser}
                    type="submit">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Registration;