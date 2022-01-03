import React, {useContext, useEffect, useState} from 'react';
import s from './TaskElem.module.scss';
import {Link} from "react-router-dom";
import {FirebaseContext} from "../../context/firebase/firebaseContext";
import {TASK_ROUTE} from "../../utils/const";

const TaskElem = ({title, desc, onRemove, id, getCheck}) => {
    const {editComletedTask, getCompleted} = useContext(FirebaseContext)
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
            alert(!check ? 'Task completed' : 'Task NOT completed')
        }).catch(e => {
            alert(e.message)
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
                        edit, id
                    }}
                    className={s.edit}>
                    edit
                </Link>
                <div className={s.button}>
                    <button onClick={() => onRemove(id)}>X</button>
                </div>
            </div>
        </li>
    );
};

export default TaskElem;