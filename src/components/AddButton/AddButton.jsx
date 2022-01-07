import React from 'react';
import {Link} from "react-router-dom";
import {TASK_ROUTE} from "../../utils/const";
import s from './AddButton.module.scss'

const AddButton = ({date, complete}) => {
    return (
        <div className={s.buttonWrap}>
            <Link
                to={TASK_ROUTE}
                state={{complete, date}}
                className={s.button}>
                add new task +
            </Link>
        </div>
    );
};

export default AddButton;