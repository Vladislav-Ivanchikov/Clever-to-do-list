import React from 'react';
import moment from "moment";

import s from "./Calendar.module.scss";

const CalendarItem = ({day, selectDate, activeDate, tasks}) => {
    let className = s.calendarItem
    let selectDay = moment().add(day, 'day').format('DD.MM.YYYY')
    let tasksForDay = tasks.map(task => task.complete)

    const getTasksByStatus = (status) => {
        return tasksForDay.filter((task) => {
            return task === status;
        }).length;
    }

    const doneDot = getTasksByStatus(true)
    const undoneDot = getTasksByStatus(false)

    const selectedDate = (e) => {
        selectDate(e)
    }

    if (selectDay === activeDate) {
        className += ' ' + s.active;
    }

    return (
        <div>
            <div className={className}
                 data-date={moment().add(day, 'day').format('DD.MM.YYYY')}
                 onClick={(e) => selectedDate(e)}>
                {moment().add(day, 'day').format('DD.MM.YYYY dddd')}
            </div>
            <div className={s.dots}>
                {doneDot > 0 && <div className={s.completeDot}></div>}
                {undoneDot > 0 && <div className={s.noCompleteDot}></div>}
            </div>
        </div>

    );
};

export default CalendarItem;