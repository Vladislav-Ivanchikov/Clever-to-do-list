import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {getAuth, signOut} from "firebase/auth";
import {Context} from "../../index";
import {AlertContext} from "../../context/alert/alertContext";
import s from './Navbar.module.scss';


const Navbar = () => {
    const {auth} = useContext(Context)
    const alert = useContext(AlertContext)
    let [user] = useAuthState(auth)

    const signOutUser = async (e) => {
        e.preventDefault()
        const auth = getAuth();
        alert.showAlert(`${auth.currentUser.email} sign out !`)
        alert.autoHideAlert()
        signOut(auth)
        .catch((error) => {
            alert.showAlert(error.message, 'danger')
            alert.autoHideAlert()
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
                        <a
                            href='/'
                            className={s.links}
                            onClick={e => signOutUser(e)}>Sign out
                        </a>
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