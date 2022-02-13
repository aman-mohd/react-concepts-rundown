import React, { useState } from "react";

const Uncontrolled = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Controlled Name : </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          id="name"
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default Uncontrolled;
