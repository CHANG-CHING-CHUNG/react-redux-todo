import { useDispatch, connect } from "react-redux";
import { addTodo } from "../actions";
import AddTodo from "../components/AddTodo";
const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
  };
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
