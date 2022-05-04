import type { Component } from "solid-js";
import { createResource, For, createSignal, Suspense } from "solid-js";
import { Cat } from "../types";

const fetchData = async (skip: number) =>
  (await fetch(`https://cataas.com/api/cats?skip=${skip}&limit=10`)).json();

const CatsPage: Component = () => {
  const [skip, setSkip] = createSignal(0);
  const [data, { refetch }] = createResource<Cat[], number>(skip, fetchData);

  let input!: HTMLInputElement;

  const onSetSkip = () => {
    if (!input.value.trim()) return;
    if (isNaN(Number(input.value))) return;
    setSkip(Number(input.value));
  };

  return (
    <>
      <h1>Cats Page</h1>
      <input type="number" placeholder="Enter Skip Number" ref={input} />
      <button onClick={() => onSetSkip()}>set skip</button>
      <button onClick={() => refetch()}>refetch</button>
      <Suspense fallback={<div>Loading...</div>}>
        <ul>
          <For each={data()}>
            {(cat) => (
              <li>
                <img
                  src={`https://cataas.com/cat/${cat.id}`}
                  alt={cat.tags.join("")}
                />
              </li>
            )}
          </For>
        </ul>
      </Suspense>
    </>
  );
};

export default CatsPage;
