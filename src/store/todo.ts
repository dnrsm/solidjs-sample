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
  const toggleTodo = (id: number) => {
    setState(
      "todos",
      (todo) => todo.id === id,
      "completed",
      (completed) => !completed
    );
  };

  onMount(() => {
    addTodo("test");
  });

  return {
    state,
    addTodo,
    toggleTodo,
  };
};
