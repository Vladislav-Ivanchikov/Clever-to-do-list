import React, {useContext} from 'react';
import {CSSTransition} from "react-transition-group";
import {AlertContext} from "../../context/alert/alertContext";

const Alert = () => {
    const {alert, hideAlert} = useContext(AlertContext)
    return (
        <CSSTransition
            in={alert.visible}
            timeout={{
                enter: 500,
                exit: 350
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`} role="alert">
                {alert.text}
                <button onClick={hideAlert} type="button" className="btn-close" aria-label="Close"></button>
            </div>
        </CSSTransition>
    );
};

export default Alert;