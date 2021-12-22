import React, {useState} from 'react';
import s from './Registration.module.scss'
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const regNewUser = (e) => {
        e.preventDefault()
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert(`User with email:${email} register`)
                console.log(user)
            })

            .catch((error) => {
                alert(error.message)
            });
    }

    return (
        <div className={s.registration}>
            <h1>Registration</h1>
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
                <button onClick={regNewUser} type="submit">Register</button>
            </form>
        </div>
    );
};

export default Registration;