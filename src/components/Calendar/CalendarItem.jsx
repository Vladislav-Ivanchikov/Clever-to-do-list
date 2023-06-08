import React from 'react';
import s from "./Calendar.module.scss";
import moment from "moment";

const CalendarItem = ({day, selectDate, date}) => {
    let className = s.calendarItem
    let selectDay = moment().add(day, 'day').format('DD.MM.YYYY')

    const selectedDate = (e) => {
        selectDate(e)
    }

    if (selectDay === date) {
        className += ' ' + s.active;
    }

    return (
        <div>
            <div className={className}
                 key={day}
                 data-date={moment().add(day, 'day').format('DD.MM.YYYY')}
                 onClick={(e) => selectedDate(e)}>
                {moment().add(day, 'day').format('DD.MM.YYYY dddd')}
            </div>
            <div className={s.dots}>
                <div className={s.completeDot}></div>
                <div className={s.noCompleteDot}></div>
            </div>
        </div>

    );
};

export default CalendarItem;