import React, {useReducer} from 'react';
import axios from 'axios'
import {FirebaseContext} from "./firebaseContext";
import firebaseReduser from "./firebaseReduser";
import {auth} from "../../index";
import {ADD_TASK, FETCH_TASKS, REMOVE_TASK, SHOW_LOADING} from "../../utils/const";


const FirebaseState = ({children}) => {
    const url = "https://level1intership-default-rtdb.europe-west1.firebasedatabase.app"

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
        if (res.data){
            let payload = Object.keys(res.data).map(key => ({
                ...res.data[key], id: key
            }))
            payload = payload.filter(task => task.date === date)
            dispatch({type: FETCH_TASKS, payload})
        }
    }

    const addTasks = async (title, desc, date) => {
        const {uid} = auth.currentUser
        const task = {
            title, desc, date, complete: false
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
            showLoader, addTasks, fetchTasks, removeTasks,
            loading: state.loading,
            tasks: state.tasks
        }}>
            {children}
        </FirebaseContext.Provider>
    )
};

export default FirebaseState;