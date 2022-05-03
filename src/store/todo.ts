import { createStore } from "solid-js/store";
import { onMount } from "solid-js";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Store = {
  todos: Todo[];
};

const initialValue: Store = { todos: [] };

export const useTodo = () => {
  const [state, setState] = createStore(initialValue);

  const addTodo = (text: string) => {
    setState("todos", (todos) => [
      ...todos,
      { id: state.todos.length + 1, text, completed: false },
    ]);
  };

  const removeTodo = (id: number) => {
    setState("todos", (todos) => [...todos.filter((todo) => todo.id !== id)]);
  };

  const toggleTodo = (id: number) => {
    setState(
      "todos",
      (todo) => todo.id === id,
      "completed",
      (completed) => !completed
    );
  };

  // mount時に適当なデータを入れてみる
  onMount(() => {
    addTodo("test");
  });

  return {
    state,
    addTodo,
    removeTodo,
    toggleTodo,
  };
};
