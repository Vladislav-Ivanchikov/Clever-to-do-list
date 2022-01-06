import React, {useReducer} from 'react';
import {AlertContext} from "./alertContext";
import {alertReduser} from "./alertReduser";
import {HIDE_ALERT, SHOW_ALERT} from "../../utils/const";

const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(alertReduser, {visible: false})

    const showAlert = (text, type = 'warning') => {
        dispatch({
            type: SHOW_ALERT,
            payload: {text, type}
        })
        autoHideAlert()
    }

    const hideAlert = () => dispatch({type: HIDE_ALERT})

    const autoHideAlert = () => {
        setTimeout(() => hideAlert(), 5000)
    }

    return (
        <AlertContext.Provider
            value={{showAlert, hideAlert, autoHideAlert, alert: state}}>
            {children}
        </AlertContext.Provider>
    );
};

export default AlertState;