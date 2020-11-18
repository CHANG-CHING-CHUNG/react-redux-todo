import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { selectTodos } from "./redux/selectors";
import AddTodo from "./AddTodo";

function App() {
  const todos = useSelector(selectTodos);
  console.log(todos);
  return (
    <div className="App">
      <AddTodo />
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
