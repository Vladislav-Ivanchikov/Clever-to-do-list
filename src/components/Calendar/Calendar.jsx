import React, {useEffect, useState} from 'react';
import moment from "moment";
import CalendarItem from "./CalendarItem";
import s from './Calendar.module.scss'

const Calendar = ({getDate, tasks}) => {
    const initMonth = () => {
        const days = []
        for (let i = 0; i <= 31; i++) {
            days.push(i)
            //28 days ???
        }
        return days
    }

    const [date, setDate] = useState(moment().format('DD.MM.YYYY'))

    const selectDate = (e) => {
        setDate(e.target.dataset.date)
    }

    useEffect(() => {
        getDate(date)
    }, [date, getDate])

    return (
        <div className={s.calendar}>
            <div><h2 className={s.h2}>Calendar</h2></div>
            <div className={s.calendarSlider}>
                {initMonth().map(day =>
                    <CalendarItem day={day}
                                  selectDate={selectDate}
                                  key={day}
                                  date={date}
                                  tasks={tasks}/>
                )}
            </div>
        </div>
    );
};

export default Calendar;