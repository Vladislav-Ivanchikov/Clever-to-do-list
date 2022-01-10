import React, { useContext, useState } from "react";
import { useAuth } from "../../context/auth/AuthContext";
import { AlertContext } from "../../context/alert/alertContext";
import { Context } from "../../index";
import { ERRORS } from "../../utils/errors";
import s from "../Registration/Registration.module.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  const { auth } = useContext(Context);
  const alert = useContext(AlertContext);

  const signInUser = async (e) => {
    e.preventDefault();
    try {
      if (email && password) {
        await signIn(email, password);
        alert.showAlert(`User ${auth.currentUser.email} sign in !`, "success");
      } else alert.showAlert(ERRORS.BLANK_FIELDS);
    } catch (error) {
      alert.showAlert(ERRORS.SIGN_IN_ERR, "danger");
    }
  };

  return (
    <div className={s.registration}>
      <h3>Sign in</h3>
      <form action="">
        <div className={s.inputWrap}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={s.inputWrap}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={s.button} onClick={signInUser} type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignIn;