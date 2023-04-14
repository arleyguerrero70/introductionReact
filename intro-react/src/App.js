import React from "react";

import { ToDoCounter } from "./TodoCounter";
import { ToDoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";


// import logo from './logo.svg';
// import './App.css';

const todos = [
  {
    text: "Tarea por hacer",
    completed: false
  },
  {
    text: "Tarea por hacer 2",
    completed: true
  },
  {
    text: "Tarea por hacer 3",
    completed: false
  },
]

function App() {
  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />

      {<TodoList>
        {todos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
        </TodoList>}
      {<CreateTodoButton />}
    </React.Fragment>
  );
}

export default App;
