import React, {useState} from 'react';
import s from './TaskPage.module.scss'
import {useFirebase} from "../../context/firebase/FirebaseState";
import {auth} from "../../index";



const TaskPage = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const { addTask } = useFirebase()
    const id = Date.now().toString()
    const user = auth.currentUser

    const newTask = {
        id ,title, desc, email: user.email
    }

    const createTask = (e) => {
        e.preventDefault()
        addTask(newTask)
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