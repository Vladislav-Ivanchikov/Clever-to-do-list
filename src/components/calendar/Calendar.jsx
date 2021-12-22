import React from 'react';
import s from './Calendar.module.scss'
import moment from "moment";

const Calendar = () => {
    const days = []
    for (let i = 0; i <= 31; i++){
        days.push(i)
    }


    return (
        <div className={s.calendar}>
            <div><h2 style={{textAlign: 'center'}}>Calendar</h2></div>
            <div className={s.calendarSlider}>
            {days.map(day =>
                <div className={s.calendarItem} key={day}>
                    {moment().add(day, 'day').format('DD.MM.YYYY dddd')}
                </div>
            )}
            </div>

        </div>
    );
};

export default Calendar;