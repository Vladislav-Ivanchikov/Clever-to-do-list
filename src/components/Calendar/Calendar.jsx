import React, {useEffect, useState} from 'react';
import moment from "moment";
import CalendarItem from "./CalendarItem";
import s from './Calendar.module.scss'


const Calendar = ({getSelectDate}) => {
    const [selectedDate, setSelectedDate] = useState(moment().format('DD.MM.YYYY'))
    const [activeDate, setActiveDate] = useState(moment().format('DD.MM.YYYY'))

    const initMonth = () => {
        const days = []
        for (let i = 0; i <= 31; i++) {
            days.push(i)
        }
        return days
    }

    const dayOfMonth =  initMonth()
    const dateOfMonth = dayOfMonth.map(day => moment().add(day, 'day').format('DD.MM.YYYY'))

    const initTaskForDay = () => {
        const arr = []
        for (let i = 0; i < 31; i++){
            arr.push({day: dayOfMonth[i], date: dateOfMonth[i]})
        }
        return arr
    }
    const dateAndDay = initTaskForDay()

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
                {dateAndDay.map(day =>
                    <CalendarItem day={day.day}
                                  selectDate={selectDate}
                                  activeDate={activeDate}
                                  key={day.day}
                                  date={day.date}
                    />
                )}
            </div>
        </div>
    );
};

export default Calendar;