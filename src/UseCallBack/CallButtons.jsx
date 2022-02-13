import { useEffect } from "react";

export const Cbuttons = ({ inc, dec, reset }) => {
  console.log("Buttons Child rendered");
  useEffect(() => {
    console.log("Buttons Child rendered");
  }, [inc, dec, reset]);
  return (
    <>
      <button onClick={inc}>Increase</button>
      <button onClick={reset}>Reset</button>
      <button onClick={dec}>Decrease</button>
    </>
  );
};
