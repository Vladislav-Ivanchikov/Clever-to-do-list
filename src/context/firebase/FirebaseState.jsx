import React, {useContext, useState} from 'react';
import firebase from '../../api/FirebaseInit';
import {useAuth} from '../auth/AuthContext';
const FirebaseContext = React.createContext();

export function useFirebase() {
    return useContext(FirebaseContext);
}

const FirebaseState = ({children}) => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState([]);
    const [loading, setLoading] = useState(false);
    const ref = firebase.firestore().collection('tasks');
    const {currentUser} = useAuth();

    function getTasks() {
        ref
            .where('email', '==', currentUser.email)
            .get().then((item) => {
            const items = item.docs.map((doc) => doc.data());
            setTasks(items);
        })
        setLoading(false);
    }

    function getTaskById(taskId) {
        ref
            .doc(taskId).get()
            .then(snapshot => setTask(snapshot.data()))
    }

    function addTask(newTask) {
        ref
            .doc(newTask.id)
            .set(newTask)
            .catch((err) => {
                console.error(err);
            });
    }

    function editTaskCompleted(id, checked) {
        ref
            .doc(id)
            .update({completed: !checked})
            .catch((err) => {
                console.error(err);
            });
    }

    function editTask(updatedTask) {
        ref
            .doc(updatedTask.id)
            .update(updatedTask)
            .catch((err) => {
                console.error(err);
            });
    }

    function deleteTask(taskId) {
        ref
            .doc(taskId)
            .delete()
            .catch((err) => {
                console.error(err);
            });
    }

    const value = {
        ref,
        tasks,
        loading,
        task,
        addTask,
        getTasks,
        getTaskById,
        editTaskCompleted,
        editTask,
        deleteTask
    };


    return (
        <FirebaseContext.Provider value={value}>
            {children}
        </FirebaseContext.Provider>
    )
};

export default FirebaseState;