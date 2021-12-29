import React, {useState} from 'react';
import s from './TaskElem.module.scss';

const TaskElem = ({title, desc, onRemove, id}) => {
    const [check, setCheck] = useState(false)
    let classNameLi = s.li
    let classNameTitle = s.title
    let classNameDesc = s.desc

        if (check) {
            classNameLi += ' ' + s.active
            classNameTitle += ' ' + s.active
            classNameDesc += ' ' + s.active
        }

    return (
        <li className={classNameLi}>
            <div className={s.checkbox}>
                <input type="checkbox"
                       checked={check}
                       onChange={() => setCheck(!check)}
                       id='check'/>
            </div>
            <div className={s.taskWrap}>
                <div className={classNameTitle}>
                    {title}
                </div>
                <div className={classNameDesc}>
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