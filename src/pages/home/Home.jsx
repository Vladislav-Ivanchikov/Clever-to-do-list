import React, {useContext, useEffect, useState} from 'react';
import Calendar from "../../components/calendar/Calendar";
import TaskList from "../../components/taskList/TaskList";
import AddButton from "../../components/addButton/AddButton";
import {FirebaseContext} from "../../context/firebase/firebaseContext";
import Loader from "../../components/loader/Loader";

const Home = () => {
    const {loading, tasks, fetchTasks, removeTasks} = useContext(FirebaseContext)
    const [selectDate, setSelectDate] = useState('')

    const getDate = (value) => {
        setSelectDate(value)
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
            {loading ? <Loader/> : <TaskList tasks={tasks} onRemove={removeTasks} date={selectDate}/>}
            <AddButton date={selectDate}/>
        </div>
    );
};

export default Home;