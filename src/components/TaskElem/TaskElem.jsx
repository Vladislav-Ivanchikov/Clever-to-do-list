import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../context/firebase/firebaseContext";
import { AlertContext } from "../../context/alert/alertContext";
import { TASK_ROUTE } from "../../utils/const";
import { ERRORS } from "../../utils/errors";
import classes from "./TaskElem.module.scss";

const TaskElem = ({ title, desc, onRemove, id, getCheck, date }) => {
  const { editComletedTask, getCompleted } = useContext(FirebaseContext);
  const alert = useContext(AlertContext);

  const [check, setCheck] = useState(false);
  const [edit, setEdit] = useState(false);
  const [complete, setComplete] = useState(check);

  let { liStyle, descStyle, titleStyle, editBtn } = classes;
  if (complete) {
    liStyle += " " + classes.active;
    descStyle += " " + classes.active;
    titleStyle += " " + classes.active;
    editBtn += " " + classes.active;
  }

  const changeComletedTask = () => {
    editComletedTask(id, !check)
      .then(() => {
        alert.showAlert(
          !check
            ? `Task "${title}" completed`
            : `Task "${title}" NOT completed`,
          !check ? "success" : "warning"
        );
      })
      .catch(() => {
        alert.showAlert(ERRORS.SWW, "danger");
      });
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleChange = () => {
    getCheck(!check);
    setCheck(!check);
  };

  const handleClick = () => {
    changeComletedTask();
  };

  const handleDelete = () => {
    alert.showAlert(`Task "${title}" was deleted`, "danger");
    onRemove(id);
  };

  useEffect(() => {
    getCompleted(id).then((id) => {
      setComplete(id);
      setCheck(id);
      handleEdit();
    });
    return () => {
      setComplete(false);
      setCheck(false);
    };
  }, [getCompleted, id]);

  return (
    <li className={liStyle}>
      <div className={classes.checkbox}>
        <input
          type="checkbox"
          checked={complete}
          onChange={handleChange}
          onClick={handleClick}
        />
      </div>
      <div className={classes.taskWrap}>
        <div className={titleStyle}>{title}</div>
        <div className={descStyle}>{desc}</div>
      </div>
      <div className={classes.buttons}>
        <Link
          to={TASK_ROUTE}
          state={{
            eTitle: title,
            eDesc: desc,
            edit,
            id,
            date,
          }}
          className={editBtn}
        >
          Edit
        </Link>
        <div className={classes.button}>
          <button onClick={handleDelete}>X</button>
        </div>
      </div>
    </li>
  );
};

export default TaskElem;
