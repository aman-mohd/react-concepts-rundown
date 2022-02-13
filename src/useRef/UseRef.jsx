import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const handleSubmit = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <>
      <label htmlFor="name">UseRef Name : </label>
      <input
        ref={inputRef}
        type="text"
        placeholder="Name"
        name="name"
        id="name"
      />
      <input onClick={handleSubmit} type="submit" />
    </>
  );
};

export default UseRef;
