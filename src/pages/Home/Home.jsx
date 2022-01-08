import React, {useContext, useEffect, useState} from 'react';
import {FirebaseContext} from "../../context/firebase/firebaseContext";
import Calendar from "../../components/Calendar/Calendar";
import TaskList from "../../components/TaskList/TaskList";
import AddButton from "../../components/AddButton/AddButton";
import Loader from "../../components/Loader/Loader";

const Home = () => {
    const {loading, tasks, fetchTasks, removeTasks} = useContext(FirebaseContext)
    const [selectDate, setSelectDate] = useState()
    const [complete, setComplete] = useState(false)

    const getSelectDate = (value) => {
        setSelectDate(value)
    }

    const getComplete = (value) => {
        setComplete(value)
    }

    useEffect(() => {
        if (tasks) {
            fetchTasks(selectDate)
        }
        // eslint-disable-next-line
    }, [selectDate])

    console.log(tasks)
    return (
        <div>
            <Calendar getSelectDate={getSelectDate} tasks={tasks}/>
            {loading ? <Loader/> : <TaskList tasks={tasks}
                                             onRemove={removeTasks}
                                             date={selectDate}
                                             getComplete={getComplete}/>}
            {loading && tasks.length !== 0 ? null : <AddButton date={selectDate} complete={complete}/>}
        </div>
    );
};

export default Home;