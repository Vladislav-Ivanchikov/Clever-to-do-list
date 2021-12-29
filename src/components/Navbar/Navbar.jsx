import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {getAuth, signOut} from "firebase/auth";
import s from './Navbar.module.scss';

const Navbar = () => {
    const {auth} = useContext(Context)
    let [user] = useAuthState(auth)

    const signOutUser = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            alert('You sign out !')
        }).catch((error) => {
            alert(error.message)
        });
    }

    return (
        <header>
            <div>
                <Link to='/'
                      className={s.links}
                >
                    Tasker
                </Link>
            </div>
            <div>
                {
                    user ?
                        <button
                            className={s.sigOut}
                            onClick={signOutUser}>Sign out</button>
                        :
                        <div>
                            <Link to='/signin' className={s.links}>Sign in</Link>
                            |
                            <Link to='/registration' className={s.links}>Register</Link>
                        </div>
                }
            </div>
        </header>
    );
};

export default Navbar;