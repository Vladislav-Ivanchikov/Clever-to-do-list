import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../context/firebase/firebaseContext";
import { AlertContext } from "../../context/alert/alertContext";
import { ERRORS } from "../../utils/errors";
import classes from "./TaskPage.module.scss";

const TaskPage = () => {
  const { addTasks, editTask } = useContext(FirebaseContext);
  const alert = useContext(AlertContext);

  const navigate = useNavigate();
  const location = useLocation();
  const { edit, date, complete, eTitle, eDesc, id } = location.state;

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [editTitle, setEditTitle] = useState(eTitle);
  const [editDesc, setEditDesc] = useState(eDesc);

  const createTask = (e) => {
    e.preventDefault();
    if (title.trim() && desc.trim()) {
      addTasks(title.trim(), desc.trim(), date, complete)
        .then(() => {
          navigate("/");
          alert.showAlert(
            `Task "${title.trim()}" for ${date.slice(0, 5)} been created !`,
            "success"
          );
        })
        .catch(() => {
          alert.showAlert(ERRORS.CREATE_ERR, "danger");
        });
      setTitle("");
      setDesc("");
    } else {
      alert.showAlert(ERRORS.BLANK_FIELDS);
    }
  };

  const changeTask = (e) => {
    e.preventDefault();
    if (editTitle.trim() && editDesc.trim()) {
      editTask(id, editTitle.trim(), editDesc.trim())
        .then(() => {
          navigate("/");
          alert.showAlert(
            `Task edited to "${editTitle.trim()}" for ${date.slice(0, 5)} !`,
            "success"
          );
        })
        .catch(() => {
          alert.showAlert(ERRORS.EDIT_ERR, "danger");
        });
    } else {
      alert.showAlert(ERRORS.BLANK_FIELDS);
    }
  };

  const handleChangeTitle = (e) => {
    edit ? setEditTitle(e.target.value) : setTitle(e.target.value);
  };

  const handleChangeDesc = (e) => {
    edit ? setEditDesc(e.target.value) : setDesc(e.target.value);
  };

  const handleClick = (e) => {
    edit ? changeTask(e) : createTask(e);
  };

  return (
    <div className={classes.formWrap}>
      <h3>
        {edit
          ? `Edit task "${eTitle}" for ${date}`
          : `Create new task for ${date}`}
      </h3>
      <form action="">
        <div>
          <input
            type="text"
            placeholder="Title your task"
            value={edit ? editTitle : title}
            onChange={handleChangeTitle}
          />
        </div>
        <div>
          <textarea
            placeholder="Description your task"
            value={edit ? editDesc : desc}
            onChange={handleChangeDesc}
          />
        </div>
        <button onClick={handleClick} className={classes.button}>
          {edit ? "Edit task" : "Create task"}
        </button>
      </form>
    </div>
  );
};

export default TaskPage;
