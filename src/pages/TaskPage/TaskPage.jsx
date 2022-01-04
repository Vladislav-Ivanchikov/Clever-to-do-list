import React, {useContext, useState} from 'react';
import {FirebaseContext} from "../../context/firebase/firebaseContext";
import {AlertContext} from "../../context/alert/alertContext";
import s from './TaskPage.module.scss'

const TaskPage = (props) => {
    const {addTasks, editTask} = useContext(FirebaseContext)
    const alert = useContext(AlertContext)
    const {edit, date, complete, eTitle, eDesc, id} = props.location

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [editTitle, setEditTitle] = useState(eTitle)
    const [editDesc, setEditDesc] = useState(eDesc)

    const createTask = (e) => {
        e.preventDefault()
        if (title.trim() && desc.trim()) {
            addTasks(title.trim(), desc.trim(), date, complete)
                .then(() => {
                    alert.showAlert(`Task "${title.trim()}" been created !`, 'success')
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
                    alert.showAlert(`Task edited to "${editTitle.trim()}" !`, 'success')
                    alert.autoHideAlert()
                }).catch((e) => {
                alert.showAlert(e.message, 'danger')
            })
        } else {
            alert.showAlert('Please, fill all lines')
        }
    }

    return (
        <div className={s.formWrap}>
            <h2>{edit ?
                `Edit task "${eTitle}" for ${date}`
                :
                `Create new task for ${date || ''}`}</h2>
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