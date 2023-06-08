import React from 'react';
import {Link} from "react-router-dom";
import {TASK_ROUTE} from "../../utils/const";
import s from './AddButton.module.scss'

const AddButton = ({date}) => {
    console.log(date)

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Link
                to={TASK_ROUTE}
                state={{date}}
                className={s.button}>
                add new task +
            </Link>
        </div>

    );
};

export default AddButton;