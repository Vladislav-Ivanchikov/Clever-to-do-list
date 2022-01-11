// Types and actions for Firebase State

export const ADD_TASK = "ADD_TASK";
export const FETCH_TASKS = "FETCH_TASKS";
export const REMOVE_TASK = "REMOVE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const EDIT_COMPLETED_TASK = "EDIT_COMPLETED_TASK";
export const SHOW_LOADING = "SHOW_LOADING";

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

export const loaderAction = () => ({
  type: SHOW_LOADING,
});

// Types and actions for Firebase State

export const SHOW_ALERT = "SHOW_ALERT";
export const HIDE_ALERT = "HIDE_ALERT";

export const showAction = (text, type) => ({
  type: SHOW_ALERT,
  payload: { text, type },
});

export const hideAction = () => ({
  type: HIDE_ALERT,
});
