import { ADD_USER, DELETE_USER } from "../actionTypes";

let userId = 0;

const initialState = {
  users: [],
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        todos: [
          ...state.users,
          {
            id: userId++,
            name: action.payload.name,
          },
        ],
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        todos: state.users.filter((user) => {
          return user.id != action.payload.id;
        }),
      };
    }
    default: {
      return state;
    }
  }
}
