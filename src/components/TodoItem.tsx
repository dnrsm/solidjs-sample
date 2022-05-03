import type { Component } from "solid-js";
import { Todo } from "../store/todo";
import styles from "./TodoItem.module.css";

type Props = {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};

const TodoItem: Component<Props> = (props) => {
  const { todo, toggleTodo, removeTodo } = props;

  return (
    <li classList={{ [styles.completed]: todo.completed }}>
      <input type="checkbox" onChange={() => toggleTodo(todo.id)} />
      <span>{todo.id}</span>:<span>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;
