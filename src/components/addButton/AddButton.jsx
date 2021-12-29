import React from 'react';
import s from './AddButton.module.scss'
import {Link} from "react-router-dom";

const AddButton = ({date}) => {

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Link
                to={{
                    pathname: '/task',
                    date
                }}
                className={s.button}>
                add new task +
            </Link>
        </div>

    );
};

export default AddButton;