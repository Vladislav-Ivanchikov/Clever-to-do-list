import {
  ADD_TASK,
  FETCH_TASKS,
  REMOVE_TASK,
  SHOW_LOADING,
  EDIT_TASK,
  EDIT_COMPLETED_TASK,
} from "../../utils/actions";

const handler = {
  [SHOW_LOADING]: (state) => ({ ...state, loading: true }),
  [ADD_TASK]: (state, { payload }) => ({
    ...state,
    tasks: [...state.tasks, payload],
  }),
  [FETCH_TASKS]: (state, { payload }) => ({
    ...state,
    tasks: payload,
    loading: false,
  }),
  [REMOVE_TASK]: (state, { payload }) => ({
    ...state,
    tasks: state.tasks.filter((tasks) => tasks.id !== payload),
  }),
  [EDIT_TASK]: (state, { payload }) => ({
    ...state,
    tasks: [...state.tasks, payload],
  }),
  [EDIT_COMPLETED_TASK]: (state) => ({
    ...state,
    tasks: [...state.tasks],
  }),
  DEFAULT: (state) => state,
};

export const FirebaseReduser = (state, action) => {
  const handle = handler[action.type] || handler.DEFAULT;
  return handle(state, action);
};

export default FirebaseReduser;
