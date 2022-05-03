import type { Component } from "solid-js";
import TodoList from "./components/TodoList";
import Input from "./components/Input";
import styles from "./App.module.css";
import { useTodo } from "./store/todo";

const App: Component = () => {
  const { state, addTodo, toggleTodo, removeTodo } = useTodo();

  return (
    <div class={styles.App}>
      <Input addTodo={addTodo} />
      <TodoList
        todos={state.todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
};

export default App;
