import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../context/firebase/firebaseContext";
import Calendar from "../../components/Calendar/Calendar";
import TaskList from "../../components/TaskList/TaskList";
import AddButton from "../../components/AddButton/AddButton";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const { loading, tasks, fetchTasks, removeTasks } =
    useContext(FirebaseContext);
  const [selectDate, setSelectDate] = useState();
  const [complete, setComplete] = useState(false);

  const selectedDateCB = (value) => {
    setSelectDate(value);
  };

  const completedCB = (value) => {
    setComplete(value);
  };

  useEffect(() => {
    if (tasks) {
      fetchTasks(selectDate);
    }
    // eslint-disable-next-line
  }, [selectDate]);

  return (
    <div>
      <Calendar getSelectDate={selectedDateCB} tasks={tasks} />
      {loading ? (
        <Loader />
      ) : (
        <TaskList
          tasks={tasks}
          onRemove={removeTasks}
          date={selectDate}
          getComplete={completedCB}
        />
      )}
      {!loading && <AddButton date={selectDate} complete={complete} />}
    </div>
  );
};

export default Home;
