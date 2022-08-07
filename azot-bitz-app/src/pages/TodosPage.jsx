import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getTodosSelector} from "../redux/reducers/todosReducer/todosSelector"
import {loader, error} from "../redux/reducers/todosReducer/todosSelector";
import {loadTodos} from "../redux/reducers/todosReducer/todosReducer";

const TodosPage = () => {
    const todos = useSelector(getTodosSelector);
    const dispatch = useDispatch();
    const loading = useSelector(loader);
    const err = useSelector(error);

    useEffect(() => {
        dispatch(loadTodos())}, []
    )

    if(loading) {
        return (
            <div><h2>Loading</h2></div>
        )
    }

    if(err) {
        return (
            <div>
                <h2>Ошибка</h2>
                <button onClick={() => dispatch(loadTodos())}>Перезагрузить страницу</button>
            </div>
        )
    }

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.htmlCode}>
                <h2>{todo.name}</h2>
        </div>))}
        </div>
    )
            }

export default TodosPage;