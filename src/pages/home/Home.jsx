import React, {useContext, useEffect} from 'react';
import Calendar from "../../components/calendar/Calendar";
import TaskList from "../../components/taskList/TaskList";
import AddButton from "../../components/addButton/AddButton";
import {FirebaseContext} from "../../context/firebase/firebaseContext";
import Loader from "../../components/loader/Loader";

const Home = () => {
    const {loading, tasks, fetchTasks, removeTasks} = useContext(FirebaseContext)
    console.log(tasks)

    useEffect(() => {
        if (tasks) {
            fetchTasks()
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <Calendar/>
            {loading ? <Loader/> : <TaskList tasks={tasks} onRemove={removeTasks}/>}
            <AddButton/>
        </div>
    );
};

export default Home;