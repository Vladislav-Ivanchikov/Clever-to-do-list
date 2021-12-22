import React, {useState} from 'react';
import s from './TaskElem.module.scss';

const TaskElem = ({title, desc, onRemove, id}) => {
    const [check, setCheck] = useState(false)

    return (
        <li>
            <div className={s.checkbox}>
                <input type="checkbox" checked={check} onChange={() => setCheck(!check)}/>
            </div>
            <div className={s.taskWrap}>
                <div className={s.title}>
                    {title}
                </div>
                <div className={s.desc}>
                    {desc}
                </div>
            </div>
            <div className={s.button}>
                <button onClick={() => onRemove(id)}>X</button>
            </div>
        </li>
    );
};

export default TaskElem;