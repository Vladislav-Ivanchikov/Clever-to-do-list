import React, {useContext} from 'react';
import {AlertContext} from "../../context/alert/alertContext";

const Alert = () => {

    const {alert, hideAlert} = useContext(AlertContext)

    if (!alert.visible){
        return null
    }

    return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`} role="alert">
            {alert.text}
            <button onClick={hideAlert} type="button" className="btn-close" aria-label="Close"></button>
        </div>
    );
};

export default Alert;