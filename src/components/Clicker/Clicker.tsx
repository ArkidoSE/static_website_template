import { createSignal } from "solid-js";

import CSS from "./Clicker.module.scss";

export default function Clicker() {
  const [getCount, setCount] = createSignal(0);

  const increaseCount = () => {
    setCount(getCount() + 1);
  };
  return (
    <div class={CSS.clicker}>
      <p class={CSS.counter}> {getCount()}</p>
      <button onClick={() => increaseCount()}>Click me!</button>
    </div>
  );
}
