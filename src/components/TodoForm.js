import "./TodoForm.css";
import React, { useRef, useEffect } from "react";

function TodoForm(props) {
  let todoRef = useRef();

  useEffect(() => {
    todoRef.current.focus();
  }, []);

  const handleSumbit = (e) => {
    e.preventDefault();
    let todoList = {
      todo: todoRef.current.value,
    };
    if (todoRef.current.value === "") {
      return;
    } else {
      props.onSaveTodo(todoList);
      todoRef.current.value = "";
    }
  };

  return (
    <div>
      <form onSubmit={handleSumbit} className="form-container">
        <input placeholder="Add Todo" ref={todoRef} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
