import {ERROR_TODOS, GET_TODOS, LOADING_TODOS} from "../../actionTypes";
import {getError, getLoading, getTodos} from "../../action";

const initialState = {
    todosList: [],
    loader: false,
    error: null
};

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todosList: action.payload,
                loader: false
            }
        case LOADING_TODOS:
            return {
                ...state,
                loader: true
            }
        case ERROR_TODOS:
            return {
                ...state,
                loader: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const loadTodos = () => {
        return async dispatch => {
            dispatch(getLoading())
            try {
                const response = await fetch("https://dummyjson.com/todos");
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }
                const dataMid = await response.json();
                const data = dataMid.todos
                dispatch(getTodos(data))
            } catch (e) {
                dispatch(getError(e))
            }
        }
}

