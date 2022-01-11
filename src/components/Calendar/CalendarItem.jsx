import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import { FirebaseContext } from "../../context/firebase/firebaseContext";
import classes from "./Calendar.module.scss";

const CalendarItem = ({ day, selectDate, activeDate, date }) => {
  const { fetchForDots, tasks } = useContext(FirebaseContext);
  const [task, setTask] = useState([]);

  let className = classes.calendarItem;
  let selectDay = moment().add(day, "day").format("DD.MM.YYYY");
  let doneDot;
  let undoneDot;

  useEffect(() => {
    fetchForDots(date).then((task) => setTask(task));
    return () => {
      setTask([]);
    };
    // eslint-disable-next-line
  }, [tasks]);

  if (task) {
    const getTasksLengthByStatus = (status) => {
      return task.filter((task) => {
        return task === status;
      }).length;
    };
    doneDot = getTasksLengthByStatus(true);
    undoneDot = getTasksLengthByStatus(false);
  }

  const selectedDate = (e) => {
    selectDate(e);
  };

  if (selectDay === activeDate) {
    className += " " + classes.active;
  }

  return (
    <div>
      <div
        className={className}
        data-date={moment().add(day, "day").format("DD.MM.YYYY")}
        onClick={selectedDate}
      >
        {moment().add(day, "day").format("ddd")}
        <br />
        {moment().add(day, "day").format("D")}
      </div>
      <div className={classes.dots}>
        {doneDot > 0 && <div className={classes.completeDot}></div>}
        {undoneDot > 0 && <div className={classes.noCompleteDot}></div>}
      </div>
    </div>
  );
};

export default CalendarItem;
