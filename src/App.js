import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { selectTodos } from "./redux/selectors";
import AddTodo from "./redux/containers/AddTodo";
import { deleteTodo } from "./redux/actions";

function App() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <AddTodo />
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.name}
              <button onClick={() => dispatch(deleteTodo(todo.id))}>
                刪除
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
