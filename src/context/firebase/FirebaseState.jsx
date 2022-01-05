import React, {useReducer} from 'react';
import axios from 'axios'
import {FirebaseContext} from "./firebaseContext";
import firebaseReduser from "./firebaseReduser";
import {auth} from "../../index";
import {ADD_TASK, EDIT_TASK, FETCH_TASKS, REMOVE_TASK, SHOW_LOADING, EDIT_COMPLETED_TASK} from "../../utils/const";
const url = process.env.REACT_APP_DB_URL

const FirebaseState = ({children}) => {
    const initialState = {
        tasks: [],
        loading: false
    }
    const [state, dispatch] = useReducer(firebaseReduser, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADING})

    const fetchTasks = async (date) => {
        showLoader()
        const {uid} = auth.currentUser
        const res = await axios.get(`${url}/tasks/${uid}.json`)
        try {
            if (res.data) {
                let payload = Object.keys(res.data).map(key => ({
                    ...res.data[key], id: key
                }))
                payload = payload.filter(task => task.date === date)
                dispatch({type: FETCH_TASKS, payload})
            }
        } catch (e) {
            throw new Error(e.message)
        }
    }

    const addTasks = async (title, desc, date, complete) => {
        const {uid} = auth.currentUser
        const task = {
            title, desc, date, complete
        }
        try {
            const res = await axios.post(`${url}/tasks/${uid}.json`, task)
            const payload = {
                ...task, id: res.data.name
            }
            dispatch({type: ADD_TASK, payload})

        } catch (e) {
            throw new Error(e.message)
        }
    }

    const editTask = async (id, title, desc) => {
        const {uid} = auth.currentUser
        const task = {
            title, desc
        }
        try {
            const res = await axios.patch(`${url}/tasks/${uid}/${id}.json`, task)
            const payload = {
                ...task, id: res.data.name
            }
            dispatch({type: EDIT_TASK, payload})
        }catch (e){
            throw new Error(e.message)
        }
    }

    const editComletedTask = async ( id, complete ) => {
        const {uid} = auth.currentUser
        const task = {complete}
        try {
            await axios.patch(`${url}/tasks/${uid}/${id}.json`, task)
            const payload = {...task}
            dispatch({type: EDIT_COMPLETED_TASK, payload})
        }catch (e){
            throw new Error(e.message)
        }
    }

    const getCompleted = async id => {
        const {uid} = auth.currentUser
        const res = await axios.get(`${url}/tasks/${uid}/${id}.json`)
        if (res.data){
            return res.data.complete
        }
    }

    const removeTasks = async id => {
        const {uid} = auth.currentUser
        await axios.delete(`${url}/tasks/${uid}/${id}.json`)
        dispatch({
            type: REMOVE_TASK,
            payload: id
        })
    }

    return (
        <FirebaseContext.Provider value={{
            showLoader, addTasks, fetchTasks,
            removeTasks, editTask, editComletedTask,
            getCompleted,
            loading: state.loading,
            tasks: state.tasks
        }}>
            {children}
        </FirebaseContext.Provider>
    )
};

export default FirebaseState;