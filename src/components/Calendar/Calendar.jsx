import React, { useEffect, useState } from "react";
import moment from "moment";
import CalendarItem from "./CalendarItem";
import { initMonth } from "../../utils/initMonth";
import classes from "./Calendar.module.scss";

const Calendar = ({ getSelectDate }) => {
  const [selectedDate, setSelectedDate] = useState(moment().format("DD.MM.YYYY"));
  const [activeDate, setActiveDate] = useState(moment().format("DD.MM.YYYY"));

  const dayOfMonth = initMonth();
  const dateOfMonth = dayOfMonth.map((day) => moment().add(day, "day").format("DD.MM.YYYY"));

  const dateAndDay = dayOfMonth.map((_, i) => ({
    day: i,
    date: dateOfMonth[i]
  }))

  const selectDate = (e) => {
    setSelectedDate(e.target.dataset.date);
    setActiveDate(e.target.dataset.date);
  };

  useEffect(() => {
    getSelectDate(selectedDate);
  }, [selectedDate, getSelectDate]);

  return (
    <div className={classes.calendar}>
      <h3>Calendar</h3>
      <div className={classes.calendarSlider}>
        {dateAndDay.map((day) => (
          <CalendarItem
            day={day.day}
            selectDate={selectDate}
            activeDate={activeDate}
            key={day.day}
            date={day.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;