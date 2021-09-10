import "./TodoList.css";
import trash from "../images/trash-can.png";
import TodoForm from "./TodoForm";
import { useState } from "react";

const todoList = [
  {
    id: 100,
    todo: "Go to gym",
  },
  {
    id: 200,
    todo: "Work on React",
  },
];

function TodoList() {
  const [todo, setTodo] = useState(todoList);

  const saveTodoHandler = (enteredTodo) => {
    const todoData = {
      ...enteredTodo,
      id: Math.floor(Math.random() * 20),
    };
    setTodo((prevTodo) => {
      return [todoData, ...prevTodo];
    });
  };

  const deleteHandler = (id) => {
    const newTodoList = todo.filter((item) => item.id !== id);
    setTodo(newTodoList);
  };

  return (
    <div className="todo-container">
      <TodoForm onSaveTodo={saveTodoHandler} />
      {todo.map((list) => {
        return (
          <div key={list.id} className="todo-item">
            <input id="input" type="checkbox" />
            <p>{list.todo}</p>
            <img
              id="trash-logo"
              src={trash}
              alt="logo"
              onClick={() => deleteHandler(list.id)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
