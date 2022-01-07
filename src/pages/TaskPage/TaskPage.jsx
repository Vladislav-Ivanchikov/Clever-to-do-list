import React, {useContext, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {FirebaseContext} from "../../context/firebase/firebaseContext";
import {AlertContext} from "../../context/alert/alertContext";
import s from './TaskPage.module.scss'

const TaskPage = () => {
    const {addTasks, editTask} = useContext(FirebaseContext)
    const alert = useContext(AlertContext)

    const navigate = useNavigate()
    const location = useLocation()
    const { edit, date, complete, eTitle, eDesc, id } = location.state

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [editTitle, setEditTitle] = useState(eTitle)
    const [editDesc, setEditDesc] = useState(eDesc)

    const createTask = (e) => {
        e.preventDefault()
        if (title.trim() && desc.trim()) {
            addTasks(title.trim(), desc.trim(), date, complete)
                .then(() => {
                    navigate('/')
                    alert.showAlert(`Task "${title.trim()}" for ${date.slice(0, 5)} been created !`, 'success')
                }).catch(() => {
                alert.showAlert('Something went wrong', 'danger')
            })
            setTitle('')
            setDesc('')
        } else {
            alert.showAlert('Please, fill all lines')
        }
    }

    const changeTask = (e) => {
        e.preventDefault()
        if (editTitle.trim() && editDesc.trim()) {
            editTask(id, editTitle.trim(), editDesc.trim())
                .then(() => {
                    navigate('/')
                    alert.showAlert(`Task edited to "${editTitle.trim()}" for ${date.slice(0, 5)} !`, 'success')
                }).catch((e) => {
                alert.showAlert(e.message, 'danger')
            })
        } else {
            alert.showAlert('Please, fill all lines')
        }
    }

    return (
        <div className={s.formWrap}>
            <h3>{edit ?
                `Edit task "${eTitle}" for ${date}`
                :
                `Create new task for ${date || ''}`}
            </h3>
            <form action="">
                <div>
                    <input type="text"
                           placeholder='Title your task'
                           value={edit ? editTitle : title}
                           onChange={edit ? (e => setEditTitle(e.target.value)) : (e => setTitle(e.target.value))}
                    />
                </div>
                <div>
                    <textarea
                        placeholder='Description your task'
                        value={edit ? editDesc : desc}
                        onChange={edit ? (e => setEditDesc(e.target.value)) : (e => setDesc(e.target.value))}
                    />
                </div>
                <button onClick={edit ? changeTask : createTask}
                        className={s.button}
                >{edit ? 'Edit task' : 'Create task'}</button>
            </form>
        </div>
    );
};

export default TaskPage;