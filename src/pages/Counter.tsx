import type { Component } from "solid-js";
import { createSignal, createEffect } from "solid-js";

const CounterPage: Component = () => {
  const [count, setCount] = createSignal(0);
  createEffect(() => {
    console.log("count is", count());
  });
  return (
    <>
      <div>{count()}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
    </>
  );
};

export default CounterPage;
