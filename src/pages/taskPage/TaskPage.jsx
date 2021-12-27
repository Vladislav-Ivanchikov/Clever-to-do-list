import React, {useContext, useState} from 'react';
import {FirebaseContext} from "../../context/firebase/firebaseContext";
import s from './TaskPage.module.scss'

const TaskPage = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const firebase = useContext(FirebaseContext)

    const createTask = (e) => {
        e.preventDefault()
        if (title.trim() && desc.trim()) {
            firebase.addTasks(title.trim(), desc.trim()).then(() => {
                alert('Task been created')
            }).catch(() => {
                alert('Something went wrong')
            })
            setTitle('')
            setDesc('')
        } else {
            alert('Please fill all lines')
        }
    }

    return (
        <div className={s.formWrap}>
            <form action="">
                <div>
                    <input type="text"
                           placeholder='Title your task'
                           value={title}
                           onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <textarea
                           placeholder='Description your task'
                           value={desc}
                           onChange={e => setDesc(e.target.value)}
                    />
                </div>
                <button onClick={createTask} className={s.button}>Create Task</button>
            </form>
        </div>
    );
};

export default TaskPage;