import React from 'react';
import s from './AddButton.module.scss'
import {Link} from "react-router-dom";

const AddButton = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Link
                to='/task'
                className={s.button}>
                add new task +
            </Link>
        </div>

    );
};

export default AddButton;