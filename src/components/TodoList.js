// import "./TodoList.css";
import styled from "styled-components";
import trash from "../images/trash-can.png";
import TodoForm from "./TodoForm";
import { useState } from "react";

const TodoContainer = styled.div`
  margin: 20px 30%;
  padding: 20px 0;
  background-color: rgb(164, 48, 5);

  & .todo-item {
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
    background-color: sandybrown;
    height: 3vh;
    margin: 5px 10%;
    padding: 0px 10px;
  }

  & .todo-item input {
    margin-right: 10px;
  }

  & .todo-item p {
    font-size: 1rem;
  }

  & .todo-item .selected {
    text-decoration: line-through;
  }

  #trash-logo {
    position: absolute;
    margin-right: 5px;
    right: 0;
    width: 25px;
    height: 15px;
  }
`;

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
  const [checked, setChecked] = useState(false);

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

  const checkInputHandler = (e) => {
    if (e.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  return (
    <TodoContainer>
      <TodoForm onSaveTodo={saveTodoHandler} />
      {todo.map((list) => {
        return (
          <div key={list.id} className="todo-item">
            <input
              id="input"
              type="checkbox"
              checked={checked}
              onChange={checkInputHandler}
            />
            <p style={{ textDecoration: checked ? "line-through" : "none" }}>
              {list.todo}
            </p>
            <img
              id="trash-logo"
              src={trash}
              alt="logo"
              onClick={() => deleteHandler(list.id)}
            />
          </div>
        );
      })}
    </TodoContainer>
  );
}

export default TodoList;
