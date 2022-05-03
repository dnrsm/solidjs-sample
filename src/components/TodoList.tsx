import type { Component } from "solid-js";
import { mergeProps, For } from "solid-js";
import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem";
import { Todo } from "../store/todo";

type Props = {
  todos: Readonly<Todo[]>;
};

const TodoList: Component<Props> = (props) => {
  const merged = mergeProps({ todos: [] }, props);

  return (
    <ul class={styles.list}>
      <For each={merged.todos}>{(item) => <TodoItem todo={item} />}</For>
    </ul>
  );
};

export default TodoList;
