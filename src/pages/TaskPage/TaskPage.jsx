import React, {useContext, useState} from 'react';
import {FirebaseContext} from "../../context/firebase/firebaseContext";
import s from './TaskPage.module.scss'

const TaskPage = (props) => {
    const {addTasks, editTasks} = useContext(FirebaseContext)
    const {edit, date, complete, eTitle, eDesc, id} = props.location

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [editTitle, setEditTitle] = useState(eTitle)
    const [editDesc, setEditDesc] = useState(eDesc)

    const createTask = (e) => {
        e.preventDefault()
        if (title.trim() && desc.trim()) {
            addTasks(title.trim(), desc.trim(), date, complete).then(() => {
                alert('Task been created !')
            }).catch(() => {
                alert('Something went wrong')
            })
            setTitle('')
            setDesc('')
        } else {
            alert('Please fill all lines')
        }
    }

    const changeTask = (e) => {
        e.preventDefault()
        if (editTitle.trim() && editDesc.trim()){
            editTasks( id, editTitle.trim(), editDesc.trim()).then(() => {
                alert('Task edited !')
            }).catch((e) => {
                alert(e.message)
            })
        }else {
            alert('Please fill all lines')
        }
    }

    return (
        <div className={s.formWrap}>
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