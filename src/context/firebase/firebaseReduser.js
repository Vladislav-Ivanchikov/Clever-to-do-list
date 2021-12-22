import {ADD_TASK, FETCH_TASKS, REMOVE_TASK, SHOW_LOADING} from "../../utils/const";

const handler = {
    [SHOW_LOADING]: state => ({...state, loading: true}),
    [ADD_TASK]: (state, {payload}) => ({
        ...state,
        tasks: [...state.tasks, payload]
    }),
    [FETCH_TASKS]: (state, {payload}) => ({
        ...state,
        tasks: payload,
        loading: false
    }),
    [REMOVE_TASK]: (state, {payload}) => ({
        ...state,
        tasks: state.tasks.filter(tasks => tasks.id !== payload)
    }),
    DEFAULT: state => state
}

export const FirebaseReduser = (state, action) => {
    const handle = handler[action.type] || handler.DEFAULT
    return handle(state, action)
};

export default FirebaseReduser;