import React from "react";

const Uncontrolled = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.name.value);
    console.log(e.target.elements.surname.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="name">Uncontrolled Name : </label>
        <input type="text" placeholder="Name" name="name" id="name" />
        <input
          type="text"
          placeholder="Last Name"
          name="surname"
          id="surname"
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default Uncontrolled;
