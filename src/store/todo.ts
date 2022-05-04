import { createStore } from "solid-js/store";
import { onMount } from "solid-js";
import { ulid } from "ulid";

export type Todo = {
  id: string;
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
      { id: ulid(), text, completed: false },
    ]);
  };

  const removeTodo = (id: string) => {
    setState("todos", (todos) => [...todos.filter((todo) => todo.id !== id)]);
  };

  const toggleTodo = (id: string) => {
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
