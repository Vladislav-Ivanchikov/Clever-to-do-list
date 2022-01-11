import {
  ADD_TASK,
  EDIT_COMPLETED_TASK,
  EDIT_TASK,
  FETCH_TASKS,
  REMOVE_TASK,
} from "./const";

export const fetchAction = (payload) => ({
  type: FETCH_TASKS,
  payload,
});

export const addAction = (payload) => ({
  type: ADD_TASK,
  payload,
});

export const editAction = (payload) => ({
  type: EDIT_TASK,
  payload,
});

export const editCompleteAction = (payload) => ({
  type: EDIT_COMPLETED_TASK,
  payload,
});

export const removeAction = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});
