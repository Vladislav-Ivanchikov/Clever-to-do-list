import React, {useState} from 'react';
import s from './TaskElem.module.scss';

const TaskElem = ({title, desc, onRemove, id, getCheck}) => {
    const [check, setCheck] = useState(false)
    let {liStyle, descStyle, titleStyle } = s

        if (check) {
            liStyle += ' ' + s.active
            descStyle += ' ' + s.active
            titleStyle += ' ' + s.active
        }

    return (
        <li className={liStyle}>
            <div className={s.checkbox}>
                <input type="checkbox"
                       checked={check}
                       onChange={() => {
                           setCheck(!check)
                           getCheck(check)
                       }}
                       id='check'/>
            </div>
            <div className={s.taskWrap}>
                <div className={titleStyle}>
                    {title}
                </div>
                <div className={descStyle}>
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