import React, { useContext, useState } from "react";
import { useAuth } from "../../context/auth/AuthContext";
import { Context } from "../../index";
import { AlertContext } from "../../context/alert/alertContext";
import { ERRORS } from "../../utils/errors";
import s from "./Registration.module.scss";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  const { auth } = useContext(Context);
  const alert = useContext(AlertContext);

  const regNewUser = async (e) => {
    e.preventDefault();
    try {
      if (email && password) {
        await register(email, password);
        alert.showAlert(`User ${auth.currentUser.email} register !`, "success");
      } else alert.showAlert(ERRORS.BLANK_FIELDS);
    } catch (error) {
      alert.showAlert(error.message, "danger");
    }
  };

  return (
    <div className={s.registration}>
      <h3>Register</h3>
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
        <button className={s.button} onClick={regNewUser} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;