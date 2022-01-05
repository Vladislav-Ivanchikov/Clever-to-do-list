import React, {useEffect, useState} from 'react';
import TaskElem from "../TaskElem/TaskElem";
import s from './TaskList.module.scss'

const TaskList = ({tasks, onRemove, date, getComplete}) => {
    const [check, setCheck] = useState(false)

    const getCheck = (value) => {
        setCheck(value)
    }

    useEffect(() => {
        getComplete(check)
    }, [getComplete, check])


    return (
        <div>
            <h3 className={s.title}>Task list</h3>
            <div className={s.list}>
                <ul>
                    {tasks.length > 0 ?
                        tasks.map(task =>
                            <TaskElem
                                title={task.title}
                                desc={task.desc}
                                key={task.id}
                                id={task.id}
                                onRemove={onRemove}
                                getCheck={getCheck}
                                date={date}
                            />
                        )
                        :
                        <p>No tasks for {date}</p>}
                </ul>
            </div>
        </div>

    );
};

export default TaskList;