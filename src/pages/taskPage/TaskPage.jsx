import React, {useContext, useState} from 'react';
import {FirebaseContext} from "../../context/firebase/firebaseContext";

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
        <form action="">
            <div>
                <input type="text"
                       placeholder='Title'
                       value={title}
                       onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div>
                <input type="text"
                       placeholder='Description'
                       value={desc}
                       onChange={e => setDesc(e.target.value)}
                />
            </div>
            <button onClick={createTask}>Create Task</button>
        </form>
    );
};

export default TaskPage;