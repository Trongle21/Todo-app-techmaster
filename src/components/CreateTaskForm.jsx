import React, { useRef, useState } from "react";
import Button from "./Button";

const CreateTaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
    inputRef.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title);
    setTitle("");
  };

  const inputRef = useRef();

  return (
    <form onSubmit={handleSubmit} action="" className="create-task-form">
      <input
        ref={inputRef}
        type="text"
        className="task-input"
        value={title}
        onChange={handleChange}
      />
      <Button variant="primary">Create</Button>
    </form>
  );
};

export default CreateTaskForm;
