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
        <div className={s.list}>
            <h3>Task list</h3>
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
                        <h4 style={{textAlign: 'center'}}>No tasks for {date}</h4>}
                </ul>
        </div>
    );
};

export default TaskList;