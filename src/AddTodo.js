import { useDispatch, connect } from "react-redux";
import { addTodo } from "./redux/actions";

function AddTodo({ addTodo }) {
  return (
    <button
      onClick={() => {
        addTodo("john");
      }}
    >
      add Todo
    </button>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
  };
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
