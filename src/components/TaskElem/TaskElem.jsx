import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {FirebaseContext} from "../../context/firebase/firebaseContext";
import {AlertContext} from "../../context/alert/alertContext";
import {TASK_ROUTE} from "../../utils/const";
import s from './TaskElem.module.scss';

const TaskElem = ({title, desc, onRemove, id, getCheck, date}) => {
    const {editComletedTask, getCompleted} = useContext(FirebaseContext)
    const alert = useContext(AlertContext)

    const [check, setCheck] = useState(false)
    const [edit, setEdit] = useState(false)
    const [complete, setComplete] = useState(check)

    let {liStyle, descStyle, titleStyle} = s
    if (complete) {
        liStyle += ' ' + s.active
        descStyle += ' ' + s.active
        titleStyle += ' ' + s.active
    }

    const handleEdit = () => {
        setEdit(true)
    }

    const changeComletedTask = () => {
        editComletedTask(id, !check).then(() => {
            alert.showAlert(
                !check ? `Task "${title}" completed` : `Task "${title}" NOT completed`,
                !check ? 'success' : 'warning')
        }).catch(e => {
            alert.showAlert(e.message, 'danger')
        })
    }

    useEffect(() => {
        handleEdit()
    }, [])

    useEffect(() => {
        getCompleted(id).then(id => {
            setComplete(id)
            setCheck(id)
        })
        return () => {
            setComplete(false)
            setCheck(false)
        }
    }, [getCompleted, id])

    return (
        <li className={liStyle}>
            <div className={s.checkbox}>
                <input type="checkbox"
                       checked={complete}
                       onChange={() => {
                           getCheck(!check)
                           setCheck(!check)
                       }}
                       onClick={() => changeComletedTask()}
                       id='check'/>
            </div>
            <div className={s.taskWrap}>
                <div className={titleStyle}>
                    {title}
                </div>
                <div className={descStyle}>
                    {desc}
                </div>
            </div>
            <div className={s.buttons}>
                <Link
                    to={{
                        pathname: TASK_ROUTE,
                        eTitle: title,
                        eDesc: desc,
                        edit, id, date
                    }}
                    className={s.edit}>
                    Edit
                </Link>
                <div className={s.button}>
                    <button onClick={() => {
                        alert.showAlert(`Task "${title}" was deleted`, 'danger')
                        onRemove(id)
                    }}>X</button>
                </div>
            </div>
        </li>
    );
};

export default TaskElem;