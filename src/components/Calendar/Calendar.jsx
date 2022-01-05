import React, {useEffect, useState} from 'react';
import moment from "moment";
import CalendarItem from "./CalendarItem";
import s from './Calendar.module.scss'

const Calendar = ({getSelectDate, tasks}) => {
    const [selectedDate, setSelectedDate] = useState(moment().format('DD.MM.YYYY'))
    const [activeDate, setActiveDate] = useState(moment().format('DD.MM.YYYY'))
    // const [date, setDate] = useState()



    const initMonth = () => {
        const days = []
        for (let i = 0; i <= 31; i++) {
            days.push(i)
            //28 days ???
        }
        return days
    }

    const selectDate = (e) => {
        setSelectedDate(e.target.dataset.date)
        setActiveDate(e.target.dataset.date)
    }

    useEffect(() => {
        getSelectDate(selectedDate)
    }, [selectedDate, getSelectDate])

    return (
        <div className={s.calendar}>
            <h3>Calendar</h3>
            <div className={s.calendarSlider}>
                {initMonth().map(day =>
                    <CalendarItem day={day}
                                  selectDate={selectDate}
                                  activeDate={activeDate}
                                  key={day}
                                  // date={date}
                                  tasks={tasks}
                    />
                )}
            </div>
        </div>
    );
};

export default Calendar;