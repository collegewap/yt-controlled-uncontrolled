import React, { useRef } from "react";

const UncontrolledInput = () => {
  const inputRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    alert(inputRef.current.value);
  };
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" ref={inputRef} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UncontrolledInput;
