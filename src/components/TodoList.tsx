import type { Component } from "solid-js";
import { For } from "solid-js";
import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem";
import { Todo } from "../store/todo";

type Props = {
  todos: Readonly<Todo[]>;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};

const TodoList: Component<Props> = (props) => {
  return (
    <ul class={styles.list}>
      <For each={props.todos}>
        {(item) => (
          <TodoItem
            todo={item}
            toggleTodo={props.toggleTodo}
            removeTodo={props.removeTodo}
          />
        )}
      </For>
    </ul>
  );
};

export default TodoList;
