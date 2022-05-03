import type { Component } from "solid-js";
import { Todo } from "../store/todo";
import styles from "./TodoItem.module.css";

type Props = {
  todo: Todo;
};

const TodoItem: Component<Props> = (props) => {
  const { todo } = props;

  return (
    <li classList={{ [styles.completed]: todo.completed }}>
      <span>{todo.id}</span>:<span>{todo.text}</span>
      <span>{todo.completed}</span>
    </li>
  );
};

export default TodoItem;
