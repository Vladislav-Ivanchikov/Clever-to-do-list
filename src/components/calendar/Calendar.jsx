import React, { useEffect, useState } from 'react';
import s from './Calendar.module.scss'
import moment from "moment";
import CalendarItem from "./CalendarItem";


const Calendar = ({getDate}) => {
    const days = []
    for (let i = 0; i <= 31; i++){
        days.push(i)
    }
    const [date, setDate] = useState(moment().format('DD.MM.YYYY'))

    const selectDate = (e) => {
        setDate(e.target.dataset.date)
    }

    useEffect(() => {
        getDate(date)
    },[date, getDate])

    return (
        <div className={s.calendar}>
            <div><h2 style={{textAlign: 'center'}}>Calendar</h2></div>
            <div className={s.calendarSlider}>
            {days.map(day =>
                <CalendarItem day={day} selectDate={selectDate} key={day} date={date}/>
            )}
            </div>
        </div>
    );
};

export default Calendar;