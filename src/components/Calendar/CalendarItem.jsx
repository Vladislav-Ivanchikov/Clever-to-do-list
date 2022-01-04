import React, {useContext, useEffect} from 'react';
import moment from "moment";
import {FirebaseContext} from "../../context/firebase/firebaseContext";
import s from "./Calendar.module.scss";


const CalendarItem = ({day, selectDate, date}) => {
    let className = s.calendarItem
    let selectDay = moment().add(day, 'day').format('DD.MM.YYYY')
    const {getCompletedForDots} = useContext(FirebaseContext)

    // useEffect(() => {
    //     getCompletedForDots(date)
    //         .then(task => task.map(task => task.complete))
    //         .then(complete => console.log(complete))
    // }, [date])

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
                 onClick={(e) => {
                     (e) = selectedDate(e)
                 }}>
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