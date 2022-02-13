import React, { useContext } from "react";
import { counterContext } from "./Contexts";

const ContextCounter = () => {
  const { state, dispatch } = useContext(counterContext);
  return (
    <>
      <h1>Contex and Reducer Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
    </>
  );
};

export default ContextCounter;
