import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signOut } from "firebase/auth";
import { Context } from "../../index";
import { AlertContext } from "../../context/alert/alertContext";
import { ERRORS } from "../../utils/errors";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  const { auth } = useContext(Context);
  const alert = useContext(AlertContext);
  let [user] = useAuthState(auth);

  const signOutUser = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    alert.showAlert(`${auth.currentUser.email} sign out !`);
    signOut(auth).catch(() => {
      alert.showAlert(ERRORS.SWW, "danger");
    });
  };

  return (
    <header>
      <div>
        <Link to="/" className={classes.links}>
          Tasker
        </Link>
      </div>
      <div>
        {user ? (
          <a href="/" className={classes.links} onClick={signOutUser}>
            Sign out
          </a>
        ) : (
          <div>
            <Link to="/signin" className={classes.links}>
              Sign in
            </Link>
            |
            <Link to="/registration" className={classes.links}>
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
