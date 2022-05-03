import type { Component } from "solid-js";
import TodoList from "./components/TodoList";
import styles from "./App.module.css";
import { useTodo } from "./store/todo";

const App: Component = () => {
  const { state } = useTodo();

  return (
    <div class={styles.App}>
      <TodoList todos={state.todos} />
    </div>
  );
};

export default App;
