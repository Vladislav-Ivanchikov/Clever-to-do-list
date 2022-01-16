import React, { useReducer } from "react";
import { AlertContext } from "./alertContext";
import { alertReduser } from "./alertReduser";
import {hideAction, showAction} from "../../utils/actions";

const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReduser, { visible: false });

  const showAlert = (text, type = "warning") => {
    dispatch(showAction(text, type));
  };

  const hideAlert = () => dispatch(hideAction());

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert, alert: state }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
