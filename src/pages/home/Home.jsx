import React, {useContext, useEffect, useState} from 'react';
import {FirebaseContext} from "../../context/firebase/firebaseContext";
import Calendar from "../../components/Calendar/Calendar";
import TaskList from "../../components/TaskList/TaskList";
import AddButton from "../../components/AddButton/AddButton";
import Loader from "../../components/loader/Loader";

const Home = () => {
    const {loading, tasks, fetchTasks, removeTasks} = useContext(FirebaseContext)
    const [selectDate, setSelectDate] = useState('')
    const [complete, setComplete] = useState()

    const getDate = (value) => {
        setSelectDate(value)
    }

    const getComplete = (value) => {
        setComplete(value)
        console.log(complete)
    }

    useEffect(() => {
        if (tasks) {
            fetchTasks(selectDate)
        }
        // eslint-disable-next-line
    }, [selectDate])

    return (
        <div>
            <Calendar getDate={getDate}/>
            {loading ? <Loader/> : <TaskList tasks={tasks}
                                             onRemove={removeTasks}
                                             date={selectDate}
                                             getComplete={getComplete}/>}
            <AddButton date={selectDate}/>
        </div>
    );
};

export default Home;