import React from 'react';
import s from "./Calendar.module.scss";
import moment from "moment";

const CalendarItem = ({day, selectDate, date}) => {
    let className = s.calendarItem
    let selectDay = moment().add(day, 'day').format('DD.MM.YYYY')

        if (selectDay === date) {
            className += ' ' + s.active;
        }


    return (
        <div className={className}
             key={day}
             data-date={moment().add(day, 'day').format('DD.MM.YYYY')}
             onClick={(e) => {
                 selectDate(e)
             }}>
            {moment().add(day, 'day').format('DD.MM.YYYY dddd')}
            {/*<div>*/}
            {/*    dots*/}
            {/*</div>*/}
        </div>
    );
};

export default CalendarItem;