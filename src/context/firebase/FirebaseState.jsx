import React, {useReducer} from 'react';
import axios from 'axios'
import {FirebaseContext} from "./firebaseContext";
import firebaseReduser from "./firebaseReduser";
import {ADD_TASK, FETCH_TASKS, REMOVE_TASK, SHOW_LOADING} from "../../utils/const";
import {auth} from "../../index";

const url = process.env.REACT_APP_DB_URL

const FirebaseState = ({children}) => {
    const initialState = {
        tasks: [],
        loading: false
    }

    const [state, dispatch] = useReducer(firebaseReduser, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADING})

    const fetchTasks = async () => {

        auth.currentUser.getIdToken(true)
            .then(idToken => {
                console.log(idToken)
            })

        showLoader()
        const res = await axios.get(`${url}/tasks.json`)
        const payload = Object.keys(res.data).map(key => ({
            ...res.data[key], id: key
        }))
        dispatch({type: FETCH_TASKS, payload})
    }

    const addTasks = async (title, desc) => {
        const task = {
            title, desc
        }
        try {
            const res = await axios.post(`${url}/tasks.json`, task)
            const payload = {
                ...task, id: res.data.name
            }
            dispatch({type: ADD_TASK, payload})

        } catch (e) {
            throw new Error(e.message)
        }
    }

    const removeTasks = async id => {
        await axios.delete(`${url}/tasks/${id}.json`)
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