import { ADD_TODO, DELETE_TODO, ADD_USER, DELETE_USER } from "./actionTypes";

export function addTodo(name) {
  return {
    type: ADD_TODO,
    payload: {
      name: name,
    },
  };
}

export function deleteTodo(todoId) {
  return {
    type: DELETE_TODO,
    payload: {
      id: todoId,
    },
  };
}

export function addUser(name) {
  return {
    type: ADD_USER,
    payload: {
      name,
    },
  };
}
export function deleteUser(userId) {
  return {
    type: DELETE_USER,
    payload: {
      id: userId,
    },
  };
}
