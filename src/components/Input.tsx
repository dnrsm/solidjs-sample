import type { Component } from "solid-js";

type Props = {
  addTodo: (text: string) => void;
};

const Input: Component<Props> = (props) => {
  const { addTodo } = props;
  let input!: HTMLInputElement;

  const onSubmit = () => {
    if (!input.value.trim()) return;
    addTodo(input.value);
    input.value = "";
  };

  return (
    <>
      <input type="text" ref={input} />
      <button onClick={() => onSubmit()}>Add Todo</button>
    </>
  );
};

export default Input;
