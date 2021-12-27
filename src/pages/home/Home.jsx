import React, {useEffect} from 'react';
import Calendar from "../../components/calendar/Calendar";
import TaskList from "../../components/taskList/TaskList";
import AddButton from "../../components/addButton/AddButton";
import Loader from "../../components/loader/Loader";
import {useFirebase} from "../../context/firebase/FirebaseState";


const Home = () => {
    const { tasks, loading, getTasks, deleteTask } = useFirebase();

    useEffect(() => {
            getTasks()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <Calendar/>
            {loading ? <Loader/> : <TaskList tasks={tasks} onRemove={deleteTask}/>}
            <AddButton/>
        </div>
    );
};

export default Home;