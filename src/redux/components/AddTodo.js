import { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [value, setValue] = useState("");
  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          addTodo(value);
          setValue("");
        }}
      >
        add Todo
      </button>
    </>
  );
}
