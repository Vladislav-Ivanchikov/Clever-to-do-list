import React from 'react';
import s from './TaskList.module.scss'
import TaskElem from "../taskElem/TaskElem";

const TaskList = ({tasks, onRemove}) => {

    return (
        <div className={s.list}>
            <h2 style={{textAlign: 'center'}}>Task list</h2>
            <ul>
                {tasks.map(task =>
                    <TaskElem title={task.title} desc={task.desc} key={task.id} id={task.id} onRemove={onRemove}/>
                )}
            </ul>
        </div>
    );
};

export default TaskList;