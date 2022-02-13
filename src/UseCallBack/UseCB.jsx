import { useState, useCallback, useMemo } from "react";
import { Cbuttons } from "./CallButtons";
import { Toggle } from "./Toggle";

const Ucb = () => {
  console.log("parent rendered");
  const [toggle, setToggle] = useState(true);
  const [count, setCount] = useState(0);
  const [data, setData] = useState("Hello");

  const handleIncrease = useCallback(() => {
    setCount((prev) => {
      return prev + 1;
    });
  }, []);

  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  const handleDecrease = useCallback(() => {
    setCount((prev) => {
      return prev - 1;
    });
  }, []);

  const printName = useCallback(
    (name) => {
      return <h1>{data + " " + name}</h1>;
    },
    [data]
  );

  const memoName = useMemo(() => <Toggle namePrint={printName} />, [printName]);
  const memoBtns = useMemo(
    () => (
      <Cbuttons inc={handleIncrease} dec={handleDecrease} reset={handleReset} />
    ),
    [handleIncrease, handleDecrease, handleReset]
  );

  return (
    <>
      <h1>State Count: {count}</h1>
      {memoBtns}
      {memoName}
      <button onClick={() => setToggle(!toggle)}>Toggler</button>
      <h1>{toggle ? "Aman" : "Mohsin"}</h1>
    </>
  );
};

export default Ucb;
