import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import { FirebaseContext } from "../../context/firebase/firebaseContext";
import s from "./Calendar.module.scss";

const CalendarItem = ({ day, selectDate, activeDate, date }) => {
  const { fetchForDots, tasks } = useContext(FirebaseContext);
  const [task, setTask] = useState([]);

  let className = s.calendarItem;
  let selectDay = moment().add(day, "day").format("DD.MM.YYYY");
  let doneDot;
  let undoneDot;

  useEffect(() => {
    if (tasks !== []) {
      fetchForDots(date).then((task) => setTask(task));
    }
    return () => {
      setTask([]);
    };
    // eslint-disable-next-line
  }, [tasks]);

  if (task) {
    const getTasksByStatus = (status) => {
      return task.filter((task) => {
        return task === status;
      }).length;
    };
    doneDot = getTasksByStatus(true);
    undoneDot = getTasksByStatus(false);
  }

  const selectedDate = (e) => {
    selectDate(e);
  };

  if (selectDay === activeDate) {
    className += " " + s.active;
  }

  return (
    <div>
      <div
        className={className}
        data-date={moment().add(day, "day").format("DD.MM.YYYY")}
        onClick={(e) => selectedDate(e)}
      >
        {moment().add(day, "day").format("ddd")}
        <br />
        {moment().add(day, "day").format("D")}
      </div>
      <div className={s.dots}>
        {doneDot > 0 && <div className={s.completeDot}></div>}
        {undoneDot > 0 && <div className={s.noCompleteDot}></div>}
      </div>
    </div>
  );
};

export default CalendarItem;